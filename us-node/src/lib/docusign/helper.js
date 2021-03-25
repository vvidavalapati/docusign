const fs = require('fs');
const path = require('path');
const docusign = require('docusign-esign');
const config = require('../../config');

class DocusignHelper {
  constructor() {}

  async signing(accountId, accessToken) {

    const dsApi = new docusign.ApiClient();
    dsApi.setOAuthBasePath(config.DOCU_SIGN.authServer.replace('https://', ''));
    dsApi.setBasePath(config.DOCU_SIGN.restAPIUrl);
    dsApi.addDefaultHeader('Authorization', `Bearer ${accessToken}`);

    let fileBytes = null;

    try {
      const file = path.resolve(
        config.DOCU_SIGN.docusignDocumentsLocation,
        config.DOCU_SIGN.testFileName
      );
      fileBytes = fs.readFileSync(file);
    } catch (e) {
      throw e;
    }

    // create an envelope
    const envDef = new docusign.EnvelopeDefinition();
    envDef.emailSubject = 'Please sign this test document sent from Node JS';

    // create a document
    const base64Doc = new Buffer(fileBytes).toString('base64');
    const doc = new docusign.Document();
    doc.documentBase64 = base64Doc;
    doc.name = config.DOCU_SIGN.testFileName;
    doc.extension = config.DOCU_SIGN.testFileExtension;
    doc.documentId = '1';

    // add document to envelope
    const docs = [];
    docs.push(doc);
    envDef.documents = docs;

    // add receipient
    const signer = new docusign.Signer();
    signer.email = config.DOCU_SIGN.receiverEmail;
    signer.name = config.DOCU_SIGN.receiverName;
    signer.recipientId = '1';
    signer.embeddedRecipientStartURL = config.DOCU_SIGN.embeddedRecipientStartURL;

    // create a signHere tab 100 pixels down and 150 right from the top left
    // corner of first page of document
    const signHere = new docusign.SignHere();
    signHere.documentId = '1';
    signHere.pageNumber = '1';
    signHere.recipientId = '1';
    signHere.xPosition = '100';
    signHere.yPosition = '150';

    // can have multiple tabs, so need to add to envelope as a single element list
    const tabs = new docusign.Tabs();
    tabs.signHereTabs = [signHere];
    signer.tabs = tabs;

    // add recipients (in this case a single signer) to the envelope
    envDef.recipients = new docusign.Recipients();
    envDef.recipients.signers = [];
    envDef.recipients.signers.push(signer);

    // send the envelope by setting |status| to "sent". To save as a draft set to "created"
    envDef.status = 'sent';

    // instantiate a new EnvelopesApi object
    const envelopesApi = new docusign.EnvelopesApi(dsApi);
    let envelopeSummary = null;

    try {
      // call the createEnvelope() API to create and send the envelope
      envelopeSummary = await envelopesApi.createEnvelope(accountId, {'envelopeDefinition': envDef });
    } catch (e) {
      throw e;
    }

    let recipientResponse = null;
    try {
      // Once the envelope call createRecipientView() to generate the signing URL!
      recipientResponse = await this.createRecipientView(accountId, envelopeSummary.envelopeId, accessToken);
    } catch (e) {
      throw e;
    }
    
    return recipientResponse;
  }

  async createRecipientView(accountId, envelopeId, accessToken) {

    const dsApi = new docusign.ApiClient();
    dsApi.setOAuthBasePath(config.DOCU_SIGN.authServer.replace('https://', ''));
    dsApi.setBasePath(config.DOCU_SIGN.restAPIUrl);
    dsApi.addDefaultHeader('Authorization', `Bearer ${accessToken}`);

    const envelopesApi = new docusign.EnvelopesApi(dsApi);
  
    // set the url where you want the recipient to go once they are done signing
    // should typically be a callback route somewhere in your app
    const viewRequest = new docusign.RecipientViewRequest();
    viewRequest.returnUrl = 'https://www.docusign.com/';
    viewRequest.authenticationMethod = 'email';
  
    // recipient information must match embedded recipient info we provided in step #2
    viewRequest.email = config.DOCU_SIGN.receiverEmail;
    viewRequest.userName = config.DOCU_SIGN.receiverName;
    viewRequest.recipientId = '1';
    viewRequest.embeddedRecipientStartURL = config.DOCU_SIGN.embeddedRecipientStartURL;
    
    let recipientResponse = null;

    try {
      // call the CreateRecipientView API
      recipientResponse = await envelopesApi.createRecipientView(accountId, envelopeId, { 'recipientViewRequest': viewRequest });
    } catch (e) {
      throw e;
    }
    
    return recipientResponse;
  }
}

module.exports = new DocusignHelper();