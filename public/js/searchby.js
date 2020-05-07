$(document).ready(function () {
    // Activate bootstrap-select
    $('.selectpicker').selectpicker();

    // Hide/show based off search selection
    $(".divSearchPatientID").hide();
    $(".divSearchPatientName").hide();
    $(".divSearchPatientDoctorID").hide();

    $("#searchMethod").on("change", function () {
        var v = $(this).val();
        $(".divSearchPatientID").toggle(v == "1");
        $(".divSearchPatientName").toggle(v == "2");
        $(".divSearchPatientDoctorID").toggle(v == "3");
    });
    
});