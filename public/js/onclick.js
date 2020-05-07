$( document ).ready( function ()
{

    // main page add patient
    $( "searchp" ).on( "click", function ()
    {
        // go to search page
        return $.ajax( {
            url: "api/search",
            type: "GET"

        } )

    } )






} );