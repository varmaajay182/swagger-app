
var currentInputField;
var label;
var currentInputFieldName;
var currentIdName;
var currentPlacehoder;

function inputFieldSetting() {

    var outerBox = createOuterBox()

    var typeInnerBox = createInnerBox();
    appendTypeSetting(typeInnerBox);
    outerBox.append(typeInnerBox);

    var tagNameInnerBox = createInnerBox();
    appendTagNameSetting(tagNameInnerBox);
    outerBox.append(tagNameInnerBox);

    var nameAttributeInnerBox = createInnerBox();
    appendNameAttribute(nameAttributeInnerBox)
    outerBox.append(nameAttributeInnerBox)

    var inputFieldIdInnerBox = createInnerBox();
    appendIdName(inputFieldIdInnerBox)
    outerBox.append(inputFieldIdInnerBox)

    var placeholderInnerBox = createInnerBox();
    appendPlaceHolder(placeholderInnerBox)
    outerBox.append(placeholderInnerBox)

    $('#element-setting').empty();
    $('#element-setting').append(outerBox);
}

function createOuterBox() {
    return $('<div>').css({
        "width": "90%",
        "height": "94%",
    });
}

function createInnerBox() {
    return $('<div>').css({

        "width": "100%",
        "height": "12%"
    });
}


function appendTypeSetting(innerBox) {

    var select = $("<select>")
        .addClass("custom-select")
        .css({
            "width": "100%",
            "height": "40%",
            "margin-top": "10px",
            "margin-bottom": "10px"
        })
        .on("change", function () {
            var selectedType = $(this).val();
            console.log(currentInputField);
            updateInputFieldType(currentInputField, selectedType);
        });

    var option1 = $("<option>").text("text");
    var option2 = $("<option>").text("date");
    var option3 = $("<option>").text("email");
    var option4 = $("<option>").text("password");
    var option5 = $("<option>").text("number");
    var option6 = $("<option>").text("time");

    select.append(option1).append(option2).append(option3).append(option4).append(option5).append(option6);

    // Append the label and dropdown to the inner box
    var typeLabel = $("<label>").css({
        "fontSize": "17px"
    }).html('<b>Type:</b>');
    innerBox.append(typeLabel).append(select);
}


function appendTagNameSetting(innerBox) {

    var tagNameLabel = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Input Label:</b>');

    var tagNameInput = $('<input>').addClass('form-control').attr('placeholder', 'Change the Tag Name').val(label.text())
    tagNameInput.on('input', function () {
        label.html("<b>" + $(this).val() + "</b>");
    });
    return innerBox.append(tagNameLabel).append(tagNameInput);


}

function appendNameAttribute(innerBox) {
    var tagNameAttributeLabel = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Name:</b>');

    var tagNameAttributeInput = $('<input>').addClass('form-control').attr('placeholder', 'Change the nameAttribute').val(currentInputField.attr('name'));
    tagNameAttributeInput.on('input', function () {
        var nameAttribute = $(this).val();
        currentInputField.attr('name', nameAttribute.toLowerCase())

        // updateNameAttribute(currentInputFieldName, nameAttribute)
    });

    return innerBox.append(tagNameAttributeLabel).append(tagNameAttributeInput);
}

function appendIdName(innerBox) {
    var IdNameLabel = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Id Name:</b>');

    var IdNameInput = $('<input>').addClass('form-control').attr('placeholder', 'Change the id').val(currentInputField.attr('id'));

    IdNameInput.on('input', function () {
        var newIdName = $(this).val();
        // updateIdName(currentIdName, newIdName)
        currentInputField.attr('id', newIdName.toLowerCase())
    });

    return innerBox.append(IdNameLabel).append(IdNameInput);
}

function appendPlaceHolder(innerBox) {
    var placeHolderLabel = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Placeholder:</b>');

    var PlaceholderInput = $('<input>').addClass('form-control').attr('placeholder', 'change placeholder contnet')

    PlaceholderInput.on('input', function () {
        var newPlaceholder = $(this).val();
        // console.log(currentPlacehoder.attr('placeholder'))
        updatePlaceholder(currentPlacehoder, newPlaceholder)
    });

    return innerBox.append(placeHolderLabel).append(PlaceholderInput);
}

function updatePlaceholder(currentPlacehoder, newPlaceholder) {
    currentPlacehoder.attr('placeholder', newPlaceholder)
}

// function updateIdName(currentIdName, newIdName) {
//     currentIdName.attr('id', newIdName)
// }

function updateInputFieldType(inputField, selectedType) {

    inputField.attr("type", selectedType);

    switch (selectedType) {
        case "text":
            inputField.attr("placeholder", "Please enter something...");
            break;
        case "date":
            inputField.attr("placeholder", "Select date");
            break;
        case "email":
            inputField.attr("placeholder", "Enter email");
            break;
        case "password":
            inputField.attr("placeholder", "Enter password");
            break;
        case "number":
            inputField.attr("placeholder", "Enter number");
            break;
        case "time":
            inputField.attr("placeholder", "Select time");
            break;
        default:
            inputField.attr("placeholder", "");
    }
}



$('#form-content').on('click', '.form-group', function () {
    // console.log('click')
    currentInputField = $(this).find('input');
    label = $(this).find('label');
    currentPlacehoder = $(this).find('input');
    inputFieldSetting();
});

