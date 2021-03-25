const docusignAuth = require('../../lib/docusign/auth');
const docusignHelper = require('../../lib/docusign/helper');

class DocusignService {

  async esign() {
    try {
      const tokenInfo = await docusignAuth.getToken();
      const userInfo = await docusignAuth.getUserInfo(tokenInfo.accessToken);
      const signingInfo = await docusignHelper.signing(userInfo.accountId, tokenInfo.accessToken);
      return { err: null, data: { statusCode: 200, data: signingInfo} };
    } catch (e) {
      return { err: { statusCode: 500, err }, data: null };
    }
  }
}

module.exports = DocusignService;