const hash256 = require('sha256');


function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
    this.createNewBlock(10, '0000', 'FIRSTGENESISBLOCKHASH')
}


Blockchain.prototype.createNewBlock = function(nonce,previousBlockHash, hash){
    const newBlock={
        index: this.chain.length + 1,
        timeStamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    }
    this.pendingTransactions=[];
    this.chain.push(newBlock);
    return(newBlock);
}

Blockchain.prototype.getlastBlock = function(){
    return (this.chain[this.chain.length - 1]);
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    }
    this.pendingTransactions.push(newTransaction);
    return this.getlastBlock()['index'] + 1;
}

Blockchain.prototype.blockHash = function(previousBlockHash, currentBlockdata, nonce){
    const newString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockdata);
    
    return hash256(newString);
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockdata){
    let nonce =0;
    // let stringTohash = this.blockHash(previousBlockHash,currentBlockdata, nonce);
    let hash = this.blockHash(previousBlockHash,currentBlockdata, nonce);
    while(hash.substring(0,4) !== '0000'){
        nonce++;
        hash = this.blockHash(previousBlockHash,currentBlockdata, nonce);
    }
    return nonce;
}

Blockchain.prototype.testLog = function(){
    console.log('testing logs');
}

// console.log(Blockchain.testLog());
module.exports = Blockchain;