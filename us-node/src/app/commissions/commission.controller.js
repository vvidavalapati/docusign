const CommissionService = require('./commission.service');
const BaseController = require('../../lib/base.controller');

class CommissionController extends BaseController {

  constructor() {
    super();
  }

  static async getCommissions(request, response) {
    const commissionParams = request.query;
    const commissionService = new CommissionService();
    const { err, data } = await commissionService.getCommissions(commissionParams);
    super.send(err, data, response);                                                                                                                                                                                                                                                                                                                                                                                   
  }

  static async downloadCommissionsCSV(request, response) {
    const commissionParams = request.query;
    const commissionService = new CommissionService();
    const { err, data } = await commissionService.getCSV(commissionParams);
    super.downloadCSV(err, data, response);
  }

  static async downloadCommissionsPDF(request, response) {
    const commissionParams = request.query;
    const commissionService = new CommissionService();
    const { err, data } = await commissionService.getPDF(commissionParams);
    super.download(err, data, response);
  }
}

module.exports = CommissionController;