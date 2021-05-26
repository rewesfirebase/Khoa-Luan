//require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//create express app
const app = express();

//port
const port = process.env.PORT || 1000;

//use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());

const { MongoClient } = require("mongodb");
//Databases Station
const url =
  "mongodb+srv://vutrantienbao290699:vutrantienbao99@project.murnk.mongodb.net/ESP?retryWrites=true&w=majority";

app.route("/").get((req, res) => {
  res.status(200).send({
    "Get All Datas": {
      Description: "Return all data",
      Path: "/station/list/1 (2, 3,...)"
    },
    "API applications": {
      Description: "Return recent data",
      Path: "/station/1 (2, 3,...)"
    }
  });
});
const client = new MongoClient(url,{useUnifiedTopology: true});
client.connect(function(err) {
const db = client.db("ESP");
app.route("/station/list/:id").get((req, res) => {
  
    if (err) throw err;

    
    const collection = db.collection("Tram_" + req.params.id);
    console.log("Tram_" + req.params.id);
    collection.find({}).toArray((err, result) => {
      if (err) {
        console.log(err);
      }
      res.status(200).send(result);
    });

});

app.route("/station/:id").get((req, res) => {
    if (err) throw err;
    
    const collection = db.collection("Tram_" + req.params.id);
    collection
      .find({})
      .sort({ $natural: -1 })
      .limit(1)
      .toArray((err, result) => {
        res.status(200).send(result);
      console.log(result[0]);
      });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
