//require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var url = require('url');
//create express app
const app = express();

//port
const port = process.env.PORT || 1000;

//use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
//MongoDB connected
const { MongoClient } = require("mongodb");

const urlMDB =
  "mongodb+srv://vutrantienbao290699:vutrantienbao99@project.murnk.mongodb.net/ibm?retryWrites=true&w=majority";

const client = new MongoClient(urlMDB,{useNewUrlParser: true,
   useUnifiedTopology: true});

app.route("/").get((req, res) => {

  res.status(200).send({
    
    "Get All Datas": {
      Description: "Return all data",
      Path: "/list",
    },
    "API applications":{
      Description: "Return recent data",
      Path: "/recent",
    }
  });
});
client.connect((err, result)=>{
const db = client.db("ibm");
app.route("/list").get((req, res) => { 
    const collection = db.collection("record")
    collection.find({}).toArray((err, result) => {
      if (err) { console.log(err) };
      res.status(200).send(result); 
    });
  })


app.route("/recent").get((req, res) => {
    const collection = db.collection("record")
    collection.find({}).sort({ $natural: -1 })
    .limit(1)
    .toArray((err, result) => {
      res.status(200).send(result);
    });
  })
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});