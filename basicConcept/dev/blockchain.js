function Blockchain(){
    this.chain = [];
    this.newTransactions = [];
}


Blockchain.prototype.createNewBlock = function(nonce,previousBlockHash, hash){
    const newBlock={
        index: this.chain.length + 1,
        timeStamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    }
    this.newTransactions=[];
    this.chain.push(newBlock);
    return(newBlock);
}

Blockchain.prototype.getlastBlock = function(){
    return (this.chain[this.chain.length - 1]);
}

module.exports = Blockchain;