const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];

function initValidation(formName) {
    let $form = $(formName)

    $('form :input').change(function(ev) {
        validateForm();
        if(!this.checkValidity())
            $(this).addClass("was-validated")
    });

    $form.submit(function(event) {
        $form = $(this);
        formEl=$form.get(0);

        event.preventDefault();
        event.stopPropagation();

        validateForm();

        if(!formEl.checkValidity()) {
            $(":input").addClass("was-validated");
        }
        else {
            //TODO
            //show thank you message
            $form.attr("style", "display: none")
            $('#thxMsg').attr("style", "display: block");
        }
    });
}

function validateForm() {
    validateState("#state", "You must enter a valid two character state code, e.g., UT");
    validateCheckboxGroup("#newspaper", ".checkbox", "you must select at least one!");
}

function validateState(id, msg) {
    $el = $(id);
    let valid = false;
    let st = ($el.val())
    st = st.toUpperCase();
    $el.val(st);
    $ann = $('#errorState');
    $ann.text(msg);
    if(st == ""){
        $ann.attr("style", "display:none");
    }
    else if(!stateAbbreviations.includes(st)) {
        $('.errorMsg').attr("style", "display:hidden");
        $ann.attr("style", "display:inline");
    }
    else if(stateAbbreviations.includes(st)) {
        console.log("correct");
        $ann.attr("style", "display:none");
    }
    //TODO
    //make sure $el is uppercase
    //check state array
}

function validateCheckboxGroup(fieldName, groupName, message) {
    let valid = false;
    let error = ('#checkError');
    $cb = $(groupName);
    if(!$('input[type=checkbox]:checked').length > 0) {
        $('#checkError').attr("style", "display:inline");
        valid = false;
    }
    else {
        $('#checkError').attr("style", "display:none");
        valid = true;
    }
    //TODO
    //Validate whether any of the checkboxes are checked. set 'valid' to true if checked

    setElementValidity(fieldName, valid, message);

    return valid;
}

function setElementValidity(fieldName, valid, message, error) {
    let $field=$(fieldName);
    let el = $field.get(0);
    let $error = $(error);

    console.log(valid);
    if (valid == true) {  //it has a value
        el.setCustomValidity('');  //sets to no error message and field is valid
    } 
    else {
        el.setCustomValidity(message);   //sets error message and field gets 'invalid' sta     
    }
    $error.text(el.validationMessage)
    //TODO  insert or remove message in error div for element
}

$('document').ready(function () {
    console.log('this is ready');
    initValidation("#myform");
});