'use strict'
const express = require('express')
const app = express()
var cors = require('cors')
app.use(express.json());
app.use(cors())
const port = 3000

const fabric = require("./app/main")



//Register - JWT working (Login UI Done)
app.post('/register',fabric.registerAuth)
app.post('/login', fabric.login) - 

//JWT working
app.post('/kyc', fabric.kyc)

//Init Dummy Accounts - JWT Working (UI DONE)
app.get('/init', fabric.init)
app.get('/initAuth', fabric.initAuth)

//GetAllAssets (for user and all) -  Working (CouchDB) - (UI DONE)
app.get('/allAssets', fabric.getAllAssets)

//readAssets - JWT Working - (UI DONE)
app.get('/statement', fabric.readAsset)

//registerUser (Both private and public data) -  JWT Working
app.post('/newUser', fabric.register)

//Read Private Data - JWT Working
app.post('/readPrivate',fabric.readPrivateData)

//Transfer Money - JWT Working
app.post('/transferAmount', fabric.transferMoney)

//summary  - JWT working 
app.get('/summary', fabric.Summary)

//readBalance - JWT working - (UI DONE)
app.get('/balance',fabric.Balance)



// //PostNewTransaction
// app.post('/transaction', async (req, res) => {
//     // Now let's try to submit a transaction.
//     // This will be sent to both peers and if both peers endorse the transaction, the endorsed proposal will be sent
//     // to the orderer to be committed by each of the peer's to the channel ledger.
//     console.log('\n--> Submit Transaction: CreateAsset, creates new asset with ID, color, owner, size, and appraisedValue arguments');
//     result = await contract.submitTransaction('CreateAsset', 'asset13', 'yellow', '5', 'Tom', '1300');
//     // The "submitTransaction" returns the value generated by the chaincode. Notice how we normally do not
//     // look at this value as the chaincodes are not returning a value. So for demonstration purposes we
//     // have the javascript version of the chaincode return a value on the function 'CreateAsset'.
//     // This value will be the same as the 'ReadAsset' results for the newly created asset.
//     // The other chaincode versions could be updated to also return a value.
//     // Having the chaincode return a value after after doing a create or update could avoid the application
//     // from making an "evaluateTransaction" call to get information on the asset added by the chaincode
//     // during the create or update.
//     console.log(`*** Result committed: ${prettyJSONString(result.toString())}`);

// })

// //ReadTransactions
// app.get('/transaction', async (req, res) => {
//     console.log('\n--> Evaluate Transaction: ReadAsset, function returns an asset with a given assetID');
//     result = await contract.evaluateTransaction('ReadAsset', 'asset13');
//     console.log(`*** Result: ${prettyJSONString(result.toString())}`);
// })
// //CheckTransactionExist
// app.get('/isExist', async (req, res) => {
//     console.log('\n--> Evaluate Transaction: AssetExists, function returns "true" if an asset with given assetID exist');
//     result = await contract.evaluateTransaction('AssetExists', 'asset1');
//     console.log(`*** Result: ${prettyJSONString(result.toString())}`);
// })
// //UpdateTransaction
// app.put('/transaction',async (req, res) => {
//     console.log('\n--> Submit Transaction: UpdateAsset asset1, change the appraisedValue to 350');
//     await contract.submitTransaction('UpdateAsset', 'asset1', 'blue', '5', 'Tomoko', '350');
//     console.log('*** Result: committed')
// })
// app.get('/transfer',async (req, res) => {
//     console.log('\n--> Submit Transaction: TransferAsset asset1, transfer to new owner of Tom');
//     await contract.submitTransaction('TransferAsset', 'asset1', 'Tom');
//     console.log('*** Result: committed');
// })

// app.get('/exit',async (req, res) => {
//     gateway.disconnect();
// })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})





