var medicaldb = require("../models");

const {
  Op
} = require('sequelize');


module.exports = function (app) {
  //Get all patients
  app.get("/api/patients", function (req, res) {
    medicaldb.Patient.findAll().then(function (results) {
      res.json(results);
    });
  });

  //Get patient by id
  app.get("/api/patients/id/:id", function (req, res) {
    medicaldb.Patient.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (
      results
    ) {

      res.json(results);
    });
  });

  // Get patients by name
  app.get("/api/patients/name/:name", function (req, res) {
    medicaldb.Patient.findAll({
      where: {
        name: req.params.name
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get patients by doctorId
  app.get("/api/patients/doctorId/:doctorId", function (req, res) {
    medicaldb.Patient.findAll({
      where: {
        doctorId: req.params.doctorId
      }
    }).then(function (results) {
      res.json(results);
    });
  });


  //Get patients by doctorId and patient name
  app.get("/api/patients/doctorIdAndName/:doctorId/:name", function (req, res) {
    medicaldb.Patient.findAll({
      where: {
        [Op.and]: [{
            doctorId: req.params.doctorId
          },
          {
            name: req.params.name
          }
        ]
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  //Get doctors by name
  app.get("/api/doctors/name/:name", function (req, res) {
    medicaldb.Doctor.findAll({
      where: {
        name: req.params.name
      }
    }).then(
      function (results) {
        res.json(results);
      }
    );
  });

  //Get doctor by ID
  app.get("/api/doctors/id/:id", function (req, res) {
    medicaldb.Doctor.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (
      results
    ) {
      res.json(results);
    });
  });

  // Create a new patient
  app.post("/api/patients", function (req, res) {
    medicaldb.Patient.create(req.body).then(function () {
      console.log("New patient created!");
      res.end();
    });
  });

  //Add new record to patients
  app.put("/api/patients/:id", function (req, res) {

    medicaldb.Patient.update({
      medicalHistory: req.body.medicalHistory
    }, {
      where: {
        id: req.params.id
      }
    }).then(function () {
      console.log("Patient records updated!");
      res.status(200).end();
    });
  });

  //DEPRECATED
  /*
  //Add new patient to doctor
  app.put("/api/doctors", function(req, res) {
    medicaldb.Doctor.update(
      {patients: req.body.patients},
      {where: {id:req.body.id}
    }).then(function(results){
      console.log("Doctor patient records updated!");
      res.end();
    });
  });
  */



  // Delete Patient from Records
  //TODO/NOTE: WE PROBABLY DON'T WANT TO INCLUDE THIS FUNCTIONALITY FOR THE END USER
  app.delete("/api/patients/:id", function (req, res) {
    medicaldb.Patient.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (
      results
    ) {
      res.json(results);
    });
  });
};