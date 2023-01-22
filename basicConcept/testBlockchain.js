const Blockchain = require('./dev/blockchain')

const bitcoin = new Blockchain();

console.log(bitcoin);

//creting bicoin block 1 2 3
let newBlock1 =  bitcoin.createNewBlock('1234', 'abc0', 'abc1');
let newBlock2 =  bitcoin.createNewBlock('1234', 'abc1', 'abc2');
let newBlock3 =  bitcoin.createNewBlock('1234', 'abc2', 'abc1');
// console.log();
console.log(bitcoin);
console.log(bitcoin.getlastBlock());

//create new transaction and 
let sendToIndex = bitcoin.createNewTransaction(10000000, 'Babai', 'Subham'); //transaction created and pending after new block it will complete

let newBlock4 =  bitcoin.createNewBlock('1234', 'abc2', 'abc1'); // these block make the transaction and take all of it, and clear pending transaction
console.log('send transaction to index: ', sendToIndex );
console.log(newBlock4);