var medicaldb = require("../models");

module.exports = function(app) {

  //Get all patients
  app.get("/api/patients", function(req, res) {
    medicaldb.Patient.findAll().then(function(results) {
      res.json(results);
    });
  });

  // Get all patients by name
  app.get("/api/patients/:name", function(req, res) {
    medicaldb.Patient.findAll({where:{patient_name:req.params.name}}).then(function(results) {
      res.json("results");
    });
  });

  //Display patient data by name
  app.get("/api/display/patients/:name", function(req, res) {
    medicaldb.Patient.findAll({where:{patient_id:req.params.id}}).then(function(results) {
      var hbsObject = {
        patients: results
      };
      res.render("search",hbsObject);
    });
  });

  //Display patient data by ID
  app.get("/api/display/patients/:id", function(req, res) {
    medicaldb.Patient.findOne({where:{patient_id:req.params.id}}).then(function(results) {
      var hbsObject = {
        patients: results
      };
      res.render("search",hbsObject);
    });
  });

  // Create a new patient
  app.post("/api/patients", function(req, res) {
    medicaldb.Patient.create(req.body).then(function(results) {
      console.log("New patient created!");
      res.end();
    });
  });

  //Add new record to patients
  app.put("/api/patients", function(req, res) {
    medicaldb.Patient.update(
      {medicalHistory: req.body.medicalHistory},
      {where: {id:req.body.id}
    }).then(function(results){
      console.log("Patient records updated!");
      res.end();
  });

  //Add new patient to doctor
  app.put("/api/doctors", function(req, res) {
    medicaldb.Doctor.update(
      {patients: req.body.patients},
      {where: {id:req.body.id}
    }).then(function(results){
      console.log("Doctor patient records updated!");
      res.end();
  });



  // Delete Patient from Records
  //TODO/NOTE: WE PROBABLY DON'T WANT TO INCLUDE THIS FUNCTIONALITY FOR THE END USER
  app.delete("/api/patients/:patient_id", function(req, res) {
    medicaldb.Patient.destroy({ where: { id: req.params.patient_id } }).then(function(result) {
      res.json(result);
    });
  });
};