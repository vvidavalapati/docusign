const fs = require('fs');

class BaseController {

  constructor() {}

  static send(error, data, response) {
    if (error) {
      BaseController.sendException(error, response);
    } else {
      BaseController.sendData(data, response);
    }
  }

  static sendException(error, response) {
    const err = Object.assign({}, error);
    err.status = 'failed';
    response.status(err.statusCode).json(err.err);
  }

  static sendData(data, response) {
    response.status(data.statusCode).json(data.data);
  }

  static downloadCSV(error, data, response) {
    if (error) {
      return BaseController.sendException(error, response);
    }
    response.setHeader('Content-Type', 'text/csv');
    response.setHeader('Content-Disposition', 'attachment;filename=commissions.csv');
    response.status(data.statusCode).send(data.csv);
  }

  static download(error, data, response) {
    if (error) {
      return BaseController.sendException(error, response);
    }
    response.download(`src/files/${data}`);
  }
}

module.exports = BaseController;