"use strict";

// create App function
module.exports = function (app, data) {
  // userList Routes

  //
  app.route("/").get((req, res) => {
    res.status(200).send({
      listUsersRoute: {
        Name: "Get All Datas",
        Description: "Return all users and passwords wifi",
        Path: "/GetAllStationOne (Two,...)",
      },
    });
  });

  //
  /*  app.route("/APIStationOne").get((req, res) => {
     res.status(200).send(data);
   }) */
  // get and post request for /users endpoints
  app.route("/GetAllStationOne").get((req, res) => {
    res.status(200).send(data);
  });
};
