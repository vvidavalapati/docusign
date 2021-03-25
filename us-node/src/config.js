const config = {};

config.ADDITIONAL_COMMISSION = '';
config.SUB_PAY = '';
config.ANNUITIZED = '';
config.INITIAL = '';
config.OFFSET_RETAINED = '';
config.RENEWAL = '';
config.TRAIL = '';
config.ADVANCE = '';
config.ADVANCE_RECOUP = '';
config.FINAL_AOV_RECOUP = '';
config.ADDITIONAL_COMMISSION = '';
config.ADDITIONAL_COMMISSION = '';
config.ADDITIONAL_COMMISSION = '';
config.ADDITIONAL_COMMISSION = '';
config.ADDITIONAL_COMMISSION = '';
config.ADDITIONAL_COMMISSION = '';
config.ADDITIONAL_COMMISSION = '';
config.ADDITIONAL_COMMISSION = '';
config.ADDITIONAL_COMMISSION = '';
config.DB2_PARAM = '';

// Docusign configuration
config.DOCU_SIGN = {};
config.DOCU_SIGN.authMethod = 'jwt-auth';
config.DOCU_SIGN.clientId = '77ae7c9d-1868-425d-93de-a83c9b16489e'; // Integration key
config.DOCU_SIGN.clientSecret = 'e57f0c6e-dee3-4940-84b5-d304d02251be'; // Secret key
config.DOCU_SIGN.jwtClientId = '77ae7c9d-1868-425d-93de-a83c9b16489e'; // Integration key
config.DOCU_SIGN.privateKeyLocation = __dirname + '\\docusign\\private_key.txt';
config.DOCU_SIGN.userId = '0bb8a244-65af-41a7-a386-97a8cf109fec'; // API Username
config.DOCU_SIGN.signerEmail = 'surendra681@gmail.com';
config.DOCU_SIGN.signerName = 'Surendra';
config.DOCU_SIGN.clickAPIUrl = 'https://demo.docusign.net/clickapi'; // Account's Base URI
config.DOCU_SIGN.restAPIUrl = 'https://demo.docusign.net/restapi'; // Account's Base URI
config.DOCU_SIGN.scopes = ['signature'];
config.DOCU_SIGN.authServer = 'https://account-d.docusign.com';
config.DOCU_SIGN.targetAccountId = false;
config.DOCU_SIGN.docusignDocumentsLocation = __dirname + '\\docusign\\samples';
config.DOCU_SIGN.tokenReplaceMin = 10;
config.DOCU_SIGN.testFileName = 'test.pdf';
config.DOCU_SIGN.testFileExtension = 'pdf';
config.DOCU_SIGN.receiverEmail = 'vvsurendra.boddu@gmail.com';
config.DOCU_SIGN.receiverName = 'Surendra Kumar B';
config.DOCU_SIGN.embeddedRecipientStartURL = 'SIGN_AT_DOCUSIGN'

// App configuration
config.APP = {};
config.APP.port = process.env.PORT || 3000;
config.APP.host = process.env.HOST || 'localhost';
config.APP.isProduction = process.env.isProduction === 'true' ? true : false;
config.APP.apiUrl = '/api/v1';

module.exports = config;