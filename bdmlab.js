
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://jmp0284:mDb*2019@cluster0-dsoob.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongoose = require('mongoose');

const uri = 'mongodb+srv://jmp0284:mDb*2019@cluster0-dsoob.mongodb.net/jmpmevn?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conectado a DB') },
  /** handle initial connection error */
  err => { console.log(err) }
);
