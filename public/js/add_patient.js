$(function(){
    function PostData(id){
    event.preventDefault();
    $("addNewPatient").on("click",function(){
        if (!$patientName.val().trim() || !$doctorId.val().trim() || !$medicalHistory.val()) {
            return;
          }
        var $patientName = $("#patientName");
        var $doctorId =$("#doctorId");
        var $medicalHistory =$("#medicalHistory");

        var info = {
            patientName: $patientName.val().trim(),
            doctorId: $doctorId.val().trim(),
            medicalHistory: $medicalHistory.val().trim()

        }

        $.ajax({
            type: 'POST',
            url: "/api/patiens" + id ,
            data: info,
            then: function(newInfo){
                console.log(newInfo);
            }
        })

    })
}
})