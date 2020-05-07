$( document ).ready( function ()
{

    // main page add patient
    $( ".search" ).on( "click", function ()
    {
        // go to search page
        return $.ajax( {
            url: "/api/patients",
            type: "GET"

        } )

    } )


    // Search Patient By ID
    $( ".searchPatientById" ).on( "click", function ( id )
    {
       
    //    var id = 
        return $.ajax( {
            url: "/api/patients/" + id,
            type: "GET"
        } );
    } )



    // Search by Doctor ID
    $( ".searchPatientByDoctorId" ).on( "click", function ( id )
    {
        return $.ajax( {
            url: "/api/patients/doctorId/" + id,
            type: "GET"
        } );
    } )







} );






