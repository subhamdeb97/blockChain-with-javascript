const Blockchain = require('./dev/blockchain')

const bitcoin = new Blockchain();

console.log(bitcoin);

let newBlock1 =  bitcoin.createNewBlock('1234', 'abc0', 'abc1');
let newBlock2 =  bitcoin.createNewBlock('1234', 'abc1', 'abc2');
let newBlock3 =  bitcoin.createNewBlock('1234', 'abc2', 'abc1');
// console.log();
console.log(bitcoin);
console.log(bitcoin.getlastBlock());