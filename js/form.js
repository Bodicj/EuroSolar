$(document).ready(function(){
    $( ".requests" ).click(function() {

        if ($('#private')[0].checked == true) {
            $('#entity_form').css("display", 'none');
            $('#private_form').css("display", "flex");
            $("#btn_request")[0].setAttribute("form","private_form");
        }
        else {
            $('#private_form').css("display", "none");
            $('#entity_form').css("display", 'flex');
            $("#btn_request")[0].setAttribute("form","entity_form");
        }
    });
});
