const express = require('express')
const app = express()
const port = 3000;

const User =  require('./models/User');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.b89qj8o.mongodb.net/?retryWrites=true&w=majority', {dbName: 'rns-db'});
  console.log("connected to Mongo DB ")
  init();
}

async function init(){
    await User.create({name: 'Satish', company: 'RNS'});
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})