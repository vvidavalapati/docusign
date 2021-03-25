const config = require('../../config');
const commissions = require('./commissions.mock');
const csvHelper = require('../../lib/helpers/csv.helper');
const ejs = require('ejs');
const pdf = require('html-pdf');
const path = require('path');

class CommissionService {

  async getCommissions(commissionParams) {

    return Promise.resolve({ err: null, data: { statusCode: 200, data: commissions } });
    // Getting individual params
    const companyCode = commissionParams.CompanyCode;
    const search = commissionParams.Search;
    const agencyId = commissionParams.AgencyId;
    const agentId = commissionParams.AgentId;
    const transDescType = commissionParams.TransDesc;
    const startDate = commissionParams.StartDate;
    const endDate = commissionParams.EndDate;
    const start = commissionParams.start;
    const length = commissionParams['length'];
    const draw = commissionParams.draw;

    const columnName = '';
    const columnOrder = '';

    const [
      transDesc, transDesc2,
      transDesc3, transDesc4,
      transDesc5, transDesc6,
      transDesc7, transDesc8,
      transDesc9, transDesc10,
      transDesc11, transDesc12,
      transDesc13, transDesc14,
      transDesc15, transDesc16
    ] = this.getTransDesc(transDescType);
  }

  getTransDesc(transDescType) {
    const transDesc = null;
    const transDesc2 = null;
    const transDesc3 = null;
    const transDesc4 = null;
    const transDesc5 = null;
    const transDesc6 = null;
    const transDesc7 = null;
    const transDesc8 = null;
    const transDesc9 = null;
    const transDesc10 = null;
    const transDesc11 = null;
    const transDesc12 = null;
    const transDesc13 = null;
    const transDesc14 = null;
    const transDesc15 = null;
    const transDesc16 = null;

    const transDescArray = transDescType.split(',');

    for (let i in transDescArray) {

      const currentTransDesc = transDescArray[i];
      
      if (currentTransDesc === config.ADDITIONAL_COMMISSION) {
        transDesc = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.SUB_PAY) {
        transDesc2 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.ANNUITIZED) {
        transDesc3 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.INITIAL) {
        transDesc4 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.OFFSET_RETAINED) {
        transDesc5 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.RENEWAL) {
        transDesc6 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.TRAIL) {
        transDesc7 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.ADVANCE) {
        transDesc8 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.ADVANCE_RECOUP) {
        transDesc9 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.FINAL_AOV_RECOUP) {
        transDesc10 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.ADDITIONAL_COMMISSION) {
        transDesc11 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.ADDITIONAL_COMMISSION) {
        transDesc12 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.ADDITIONAL_COMMISSION) {
        transDesc13 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.ADDITIONAL_COMMISSION) {
        transDesc14 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.ADDITIONAL_COMMISSION) {
        transDesc15 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      } else if (currentTransDesc === config.ADDITIONAL_COMMISSION) {
        transDesc16 = `${config.DB2_PARAM}${currentTransDesc}${config.DB2_PARAM}`;
      }
    
    }
  }

  async getCSV(commissionParams) {
    const fields = [
      { label: 'Company Code', value: 'companyCode' },
      { label: 'Search', value: 'search' },
      { label: 'Agency Id', value: 'agencyId' },
      { label: 'Effective Date', value: 'effectiveDate' },
      { label: 'Agent Id', value: 'agentId' },
      { label: 'Master Id', value: 'masterId' },
      { label: 'Trans Type', value: 'transType' },
      { label: 'Trans Description', value: 'transDesc' },
      { label: 'Product Description', value: 'prodDesc' },
      { label: 'Annt Name', value: 'anntName' },
      { label: 'Agent Name', value: 'agentName' },
      { label: 'BD Account Number', value: 'bdAccountNum' },
      { label: 'Issue Date', value: 'issueDate' },
      { label: 'Premium Amount', value: 'premiumAmt' },
      { label: 'Commission Rate', value: 'commRate' },
      { label: 'Split Percentage', value: 'splitPercent' },
      { label: 'Commission Amount', value: 'comAmt' },
      { label: 'Start', value: 'start' },
      { label: 'Duration', value: 'lenth' },
      { label: 'PtDa', value: 'ptDa' },
      { label: 'PtDb', value: 'ptDb' },
      { label: 'PtDc', value: 'ptDc' },
      { label: 'PtDd', value: 'ptDd' },
      { label: 'PtDe', value: 'ptDe' },
      { label: 'PtDf', value: 'ptDf' },
      { label: 'PtDg', value: 'ptDg' },
      { label: 'PtDh', value: 'ptDh' },
      { label: 'PtDi', value: 'ptDi' },
      { label: 'PtDk', value: 'ptDk' },
      { label: 'PtDl', value: 'ptDl' },
      { label: 'PtDm', value: 'ptDm' },
      { label: 'PtDn', value: 'ptDn' },
      { label: 'PtDo', value: 'ptDo' },
      { label: 'Principal End', value: 'principalEnd' },
      { label: 'Comm Web Ind', value: 'commWebInd' },
      { label: 'Agent Level', value: 'agentLevel' },
      { label: 'Start Date', value: 'startDate' },
      { label: 'End Date', value: 'endDate' },
      { label: 'Com DTO List', value: 'comDTOList' },
      { label: 'P Indicator', value: 'pindicator' }
    ];

    const { err, csv } = await csvHelper.getCSVFromJSON(fields, commissions.data);

    return Promise.resolve({ err, data: { statusCode: 200, csv: csv }});
  }

  async getPDF(commissionParams) {
    return new Promise((resolve, reject) => {
      ejs.renderFile(path.join(__dirname, '../views/', 'commissions.pdf.ejs'), { commissions: commissions.data }, (err, data) => {
        
        if (err) {
          return reject({ err, data: null });
        }

        const options = { format: 'A4' };

        pdf.create(data, options).toFile('src/files/commissions.pdf', (err, data) => {
          if (err) {
            return reject ({ err, data: null });
          }

          return resolve({ err: null, data: 'commissions.pdf' });
        });
      });
    });
  }
}

module.exports = CommissionService;