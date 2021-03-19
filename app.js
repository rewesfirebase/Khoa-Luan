//require express and bodyParser
const express = require("express");
const bodyParser = require("body-parser");

//create express app
const app = express();

//port
const port = process.env.PORT || 9000;

//use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./routes/dataRoutes"); //


//Databases Station


const url =
  "mongodb+srv://vutrantienbao290699:vutrantienbao99@project.murnk.mongodb.net/testretryWrites=true&w=majority";
const { MongoClient } = require("mongodb");
const client = new MongoClient(url);
client.connect(function (err) {
  if (err) throw err;
  //Main page route
  app.route("/").get((req, res) => {
    res.status(200).send({
      listUsersRoute: {
        Name: "Get All Datas",
        Description: "Return all users and passwords wifi",
        Path: "/GetAllStationOne (Two,...)",
      },
    });
  });
  //Station route
  const db = client.db("test");

  //StationOne Get all data
  let collection = db.collection("Tram_1");
  collection.find({}).toArray((err, result) => {
    app.route("/GetAllStationOne").get((req, res) => {
      res.status(200).send(result);
    });
  });

  //StationOne get
  collection.find({}).sort({ $natural: -1 }).limit(1).toArray((err, result) => {
    app.route("/APIStationOne").get((req, res) => { res.status(200).send(result); });

  });



  //Listen to server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})