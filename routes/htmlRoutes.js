var medicaldb = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("login");
  });

  //Display all patients
  app.get("/search/all", function(req, res) {
    medicaldb.Patient.findAll({})
      .then(function(results) {
        var hbsObject = {
          patients: results
        };
        res.render("search", hbsObject);
      })
      .catch(function(err) {
        console.log("Error: " + err);
      });
  });

  //Display patient data by name
  app.get("/search/:name", function(req, res) {
    medicaldb.Patient.findAll({
      where: {
        name: req.params.name
      }
    })
      .then(function(results) {
        var hbsObject = {
          patients: results
        };
        res.render("search", hbsObject);
      })
      .catch(function(err) {
        console.log("Error: " + err);
      });
  });

  //Display search by doctorId
  app.get("/search/doctorId/:doctorId", function(req, res) {
    medicaldb.Patient.findAll({
      where: {
        doctorId: req.params.doctorId
      }
    })
      .then(function(results) {
        var hbsObject = {
          patients: results
        };
        res.render("search", hbsObject);
      })
      .catch(function(err) {
        console.log("Error: " + err);
      });
  });

  //Display search by id
  app.get("/search/id/:id", function(req, res) {
    medicaldb.Patient.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function(results) {
        var hbsObject = {
          patients: results
        };
        res.render("search", hbsObject);
      })
      .catch(function(err) {
        console.log("Error: " + err);
      });
  });

  //Display search page
  app.get("/search/", function(req, res) {
    res.render("search");
  });

  //Display patient data
  app.get("/displayrec/", function(req, res) {
    res.render("displayrec");
  });

  //Display add patient page
  app.get("/addpatient/", function(req, res) {
    res.render("addpatient");
  });

  //Display patient data by ID
  app.get("/displayrec/id/:id", function(req, res) {
    medicaldb.Patient.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function(results) {
        var hbsObject = {
          patients: results
        };
        res.render("displayrec", hbsObject);
      })
      .catch(function(err) {
        console.log("Error: " + err);
      });
  });

  //Logout
  app.get("/logout", function(req, res) {
    delete req.session.authStatus;
    res.send(
      [
        "You are now logged out.",
        "<br>",
        "<a href='/'>Return to home page.</a>"
      ].join("")
    );
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
