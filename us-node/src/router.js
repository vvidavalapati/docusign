const commissionController = require('./app/commissions/commission.controller');
const docusignController = require('./app/docusign/docusign.controller');
const config = require('./config');
const router = require('express').Router();

class Router {
  constructor(app) {
    this.app = app;
    this.configureRoutes();
  }

  configureRoutes() {
    router.get('/commissions/get', commissionController.getCommissions);
    router.get('/commissions/csv', commissionController.downloadCommissionsCSV);
    router.get('/commissions/pdf', commissionController.downloadCommissionsPDF);

    router.get('/docusign/auth/callback', docusignController.authCallback);
    router.get('/docusign/esign', docusignController.esign);
    
    this.app.use(config.APP.apiUrl, router);
  }
}

module.exports = Router;