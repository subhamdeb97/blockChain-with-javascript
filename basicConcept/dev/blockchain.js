const hash256 = require('sha256');


function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
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
    let newString = previousBlockHash + JSON.stringify(currentBlockdata) + toString(nonce);
    return hash256(newString);
}



module.exports = Blockchain;