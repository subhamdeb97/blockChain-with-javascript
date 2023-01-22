const Blockchain = require('./BlockChain')

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

let testPreviousBlockhash = 'KBSNFLA908FAS07FASF87AF0ASF';
let currentTestBlock = {
    index: 10,
    timeStamp: 1674370148666,
    transactions: [],
    nonce: 211,
    previousBlockhash: '769SD7V69SDV677SDV986VS7D'
}



// console.log(Blockchain.createNewTransaction('fasfa','asfafa', 100));
// console.log(bitcoin.blockHash(testPreviousBlockhash, currentTestBlock, 100));
console.log(bitcoin.proofOfWork(testPreviousBlockhash, currentTestBlock));

console.log(bitcoin.chain)
