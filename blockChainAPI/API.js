const express = require('express');
const bodyParser = require('body-parser');

const {v4 : uuid} = require('uuid')
//from created class
const blockChain = require('./BlockChain');
const bitcoin = new blockChain();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    res.send('server running correctly')
})

app.get('/blockchain', (req, res)=>{
    res.send(bitcoin).status(200)
})

app.post('/transaction', (req, res)=>{
    let amount = req.body.amount;
    let sender = req.body.sender;
    let recipient = req.body.recipient;

    let indexOfthisTransaction = bitcoin.createNewTransaction(amount, sender, recipient);
    res.send({indexOfTransactionBlock: indexOfthisTransaction, status:'Succesfully created the transaction'}).status(201);
})

app.get('/mine', (req, res)=>{
    let previousBlockHash = bitcoin.getlastBlock();
    let currentBlockdata = {
        transactions: bitcoin.pendingTransactions,
        index : previousBlockHash['index'] + 1
    }
    let nonce = bitcoin.proofOfWork(previousBlockHash['hash'], currentBlockdata);
    let hash = bitcoin.blockHash(previousBlockHash, currentBlockdata, nonce);
    let newblock = bitcoin.createNewBlock(nonce, previousBlockHash['hash'], hash)
    let newTransactionreward = bitcoin.createNewTransaction(12.4, "00", uuid().split("-").join(''))
    res.send({status: 'succesfully mining', data: newblock}).status(201)
})


app.listen(3333, ()=>{
    console.log('server is running in port: 3333');
})