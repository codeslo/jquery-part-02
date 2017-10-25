$(document).ready(function () {
    $("#submit-button").click(function () {
        $("#first_name").val(function(){
            var hasVal = $("#first_name").val();
            if(!hasVal){
                $("#first_name").css("background-color","pink");
                $("#first_name").attr("placeholder","First Name is required.");
            }
        });
        $("#last_name").val(function(){
            var hasVal = $("#last_name").val();
            if(!hasVal){
                $("#last_name").css("background-color","pink");
                $("#last_name").attr("placeholder","Last Name is required.");
            }
        });
    });

    $("input").click(function () {
        var hasPlaceholder = $(this).attr("placeholder");
        if (hasPlaceholder) {
            $(this).attr("placeholder", "");
            $(this).css("background-color", "white");
        }

    });

});