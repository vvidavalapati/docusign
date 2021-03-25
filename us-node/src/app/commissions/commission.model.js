class CommissionModel {
  constructor(item) {
    this.draw = item.draw;
    this.recordsTotal = item.recordsTotal;
    this.recordsFiltered = item.recordsFiltered;
    this.data = item.data.map(d => new CommissionData(d));
    this.totalCommissions = item.totalCommissions;
  }
}

class CommissionData {
  constructor(item) {
    this.companyCode = item.companyCode;
    this.search = item.search;
    this.agencyId = item.agencyId;
    this.effectiveDate = item.effectiveDate;
    this.agentId = item.agentId;
    this.masterId = item.masterId;
    this.transType = item.transType;
    this.transDesc = item.transDesc;
    this.prodDesc = item.prodDesc;
    this.anntName = item.anntName;
    this.agentName = item.agentName;
    this.bdAccountNum = item.bdAccountNum;
    this.issueDate = item.issueDate;
    this.premiumAmt = item.premiumAmt;
    this.commRate = item.commRate;
    this.splitPercent = item.splitPercent;
    this.comAmt = item.comAmt;
    this.start = item.start;
    this.lenth = item.lenth;
    this.ptDa = item.ptDa;
    this.ptDb = item.ptDb;
    this.ptDc = item.ptDc;
    this.ptDd = item.ptDd;
    this.ptDe = item.ptDe;
    this.ptDf = item.ptDf;
    this.ptDg = item.ptDg;
    this.ptDh = item.ptDh;
    this.ptDi = item.ptDi;
    this.ptDk = item.ptDk;
    this.ptDl = item.ptDl;
    this.ptDm = item.ptDm;
    this.ptDn = item.ptDn;
    this.ptDo = item.ptDo;
    this.columnOrder = item.columnOrder;
    this.colName = item.colName;
    this.principalEnd = item.principalEnd;
    this.commWebInd = item.commWebInd;
    this.agentLevel = item.agentLevel;
    this.totalRecords = item.totalRecords;
    this.startDate = item.startDate;
    this.endDate = item.endDate;
    this.comDTOList = item.comDTOList;
    this.pindicator = item.pindicator;
  }
}