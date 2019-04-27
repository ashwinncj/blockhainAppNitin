function blockchain(){
  console.log('Starting blockchain application...');
}
var memPool = [];
// patientId, testCode,testDateTime,testValue, drId, hospitalId
blockchain.prototype.createTransaction=function(from, to,data){
  console.log('Creating transaction...');
  tx = {};
  // define txn data structure
  tx.from = from;
  tx.to = to;
  tx.data = data;
  tx.meta = {
      dateTime: new Date()
  };
  // To avoid making same data hash each time(test data values may be same), we are concatinating the data hash with dataTime of txn
  hash = md5(JSON.stringify(tx.data)+ tx.meta.dateTime);
  tx.meta.hash = hash;
  memPool.push(tx);
  console.log(tx);
}
