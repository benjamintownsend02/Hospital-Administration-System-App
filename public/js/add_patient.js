$(document).ready(function() {
  var patientName = $("#patientName");
  var doctorId = $("#doctorId");
  var medicalHistory = $("#medicalHistory");
  var form = $("#postForm");

  $(form).on("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    $("#addNewPatient").on("click", function() {
      if (
        !patientName.val().trim() ||
        !doctorId.val().trim() ||
        !medicalHistory.val()
      ) {
        return;
      }

      var info = {
        patientName: patientName.val().trim(),
        doctorId: doctorId.val().trim(),
        medicalHistory: medicalHistory.val()
      };

      $.ajax({
        type: "POST",
        url: "/api/patients",
        data: info,
        success: function(data) {
          //console.log(data);
          alert("Succesfully added to the database");
        }
      });
    });
  }
});
