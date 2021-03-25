const BaseController = require('../../lib/base.controller');
const DocusignService = require('./docusign.service');

class DocusignController extends BaseController {
  constructor() {
    super();
  }

  static async esign(request, response) {
    const docusignService = new DocusignService();
    const { err, data } = await docusignService.esign();
    super.send(err, data, response);
  }

  // callback for individual consent
  static async authCallback(request, response) {
    super.send(null, { statusCode: 200 }, response);                                                                                                                                                                                                                                                                                                                                                                     
  }
}

module.exports = DocusignController;