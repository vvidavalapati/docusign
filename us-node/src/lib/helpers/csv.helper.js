const { Parser } = require('json2csv');

class CSVHelper  {

  constructor() {}

  async getCSVFromJSON(fields, jsonData) {
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(jsonData);
    return Promise.resolve({ err: null, csv });
  }
}

module.exports = new CSVHelper();