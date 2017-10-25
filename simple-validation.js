$("#submit-button").click(function () {
    // valid must remain true for submit to complete. Any error should change it to false.
    var valid = true;
    $(".validate-this").each(function () {
        var hasVal = $(this).val();
        var fieldName = $(this).attr("data-fieldname");
        if (!hasVal) {
            valid = false;
            $(this).css("background-color", "pink");
            $(this).attr("placeholder", fieldName + " is required.");
        } else {
            if (!isValid($(this).attr("name"))) {
                valid = false;
            }
        }
    });

    if(valid){
        // if valid is true after all checks, submit form
        savePartier();
    }
});

function isValid(fieldName) {
    var fieldValue = $("input[name=" + fieldName + "]").val();
    var lettersOnly = new RegExp(/[a-zA-Z]{2}/g);
    var checkPhoneNumber = new RegExp(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
    var checkEmail = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    if (fieldName === "firstName" || fieldName === "lastName") {
        if (!lettersOnly.test(fieldValue)) {
            showValidationError(fieldName, "Letters only, min-length = 2");
            return;
        }else{
            return true;
        }
    } else if (fieldName === "phoneNumber") {
        if (!checkPhoneNumber.test(fieldValue)) {
            showValidationError(fieldName, "Invalid phone number");
            return;
        }else{
            return true;
        }
    } else if (fieldName === "userEmail") {
        if (!checkEmail.test(fieldValue)) {
            showValidationError(fieldName, "Invalid email address");
            return;
        }else{
            return true;
        }
    }
}

function showValidationError(fieldName, errorText) {
    var field = $("input[name=" + fieldName + "]");
    $(field).val("");
    $(field).css("background-color", "pink");
    $(field).attr("placeholder", errorText);
}

function savePartier(){
    console.log("saving!");
}