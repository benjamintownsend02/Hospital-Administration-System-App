$(document).ready(function () {

    // main page add patient

    $("searchp").on("click", function () {
        // go to search page
        return $.ajax({
            url: "api/search",

            type: "GET"

        })

    })



    // Search Patient by Name
    $("placeholder").on("click", function () {


        var patientName = $("placeholder").val().trim();

        $.ajax({
            type: "GET",
            url: `/api/patients/name/${patientName}`
        })

    })



});

