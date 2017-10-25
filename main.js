$(document).ready(function () {
    $("#submit-button").click(function () {
        $(".validate-this").each(function(){
            var hasVal = $(this).val();
            var fieldName = $(this).attr("data-fieldname");
            if(!hasVal){
                $(this).css("background-color","pink");
                $(this).attr("placeholder",fieldName + " is required.");
            }else{
                console.log($(this).attr("name"));
                console.log(isValid($(this).attr("name")));
            }
        });
    });

    $("input").click(function(){
        var hasPlaceholder = $(this).attr("placeholder");
        if(hasPlaceholder){
            $(this).attr("placeholder","");
            $(this).css("background-color","white");
        }
        
    });

    function isValid(fieldName){
        var fieldValue = $("input[name="+fieldName+"]").val();
        var lettersOnly = new RegExp (/[a-zA-Z]{2}/g);
        var checkPhoneNumber = new RegExp (/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
        var checkEmail = new RegExp (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
        if(fieldName === "firstName" || fieldName === "lastName"){
            return lettersOnly.test(fieldValue);
        }else if(fieldName === "phoneNumber"){
            return checkPhoneNumber.test(fieldValue);
        }else if(fieldName === "userEmail"){
            return checkEmail.test(fieldValue);
        }else{
            return;
        }
    }

});