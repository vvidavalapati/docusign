const config = require('../../config');
const docusign = require('docusign-esign');
const fs = require('fs');
const rsaKey = fs.readFileSync(config.DOCU_SIGN.privateKeyLocation);
const moment = require('moment');

class DocusignJwtAuth {

  constructor() {}

  async getToken() {

    const jwtLifeSec = 10 * 60;
    let results = null;

    const dsApi = new docusign.ApiClient();
    dsApi.setOAuthBasePath(config.DOCU_SIGN.authServer.replace('https://', ''));

    try {
      results = await dsApi.requestJWTUserToken(
        config.DOCU_SIGN.clientId,
        config.DOCU_SIGN.userId,
        config.DOCU_SIGN.scopes, 
        rsaKey,
        jwtLifeSec
      );
    } catch (e) {
      throw e;
    }

    const expiresAt = moment().add(results.body.expires_in, 's')
      .subtract(config.DOCU_SIGN.tokenReplaceMin, 'm');

    return {
      accessToken: results.body.access_token,
      tokenExpirationTimestamp: expiresAt
    };

  }

  async getUserInfo(accessToken) {
    const targetAccountId = config.DOCU_SIGN.targetAccountId;
    let results = [];

    const dsApi = new docusign.ApiClient();
    dsApi.setOAuthBasePath(config.DOCU_SIGN.authServer.replace('https://', ''));

    try {
      results = await dsApi.getUserInfo(accessToken);
    } catch (e) {
      throw e;
    }

    let accountInfo;
    if (!Boolean(targetAccountId)) {
        // find the default account
        accountInfo = results.accounts.find(account =>
            account.isDefault === "true");
    } else {
        // find the matching account
        accountInfo = results.accounts.find(account => account.accountId == targetAccountId);
    }

    if (typeof accountInfo === 'undefined') {
      throw new Error (`Target account ${targetAccountId} not found!`);
    }

    return {
      accountId: accountInfo.accountId,
      accountName: accountInfo.accountName
    };
  }
}

module.exports = new DocusignJwtAuth();