var label;
var currenttextarea;
var currentIdName;

function textAreaSetting() {
    var outerBox = createOuterBox();

    var labelInnerBox = createInnerBox();
    appendLabelName(labelInnerBox);
    outerBox.append(labelInnerBox);

    var placeholderInnerBox = createInnerBox();
    appendTextPlaceHolder(placeholderInnerBox);
    outerBox.append(placeholderInnerBox);

    var textAreaFieldIdInnerBox = createInnerBox();
    appendTextIdName(textAreaFieldIdInnerBox)
    outerBox.append(textAreaFieldIdInnerBox)

    $('#element-setting').empty();
    $('#element-setting').append(outerBox);
}

function createOuterBox() {
    return $('<div>').css({
        "width": "90%",
        "height": "94%",
        // "backgroundColor": "red"
    });
}

function createInnerBox() {
    return $('<div>').css({
        "width": "100%",
        "height": "12%"
    });
}

function appendLabelName(innerBox) {
    var LabelName = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Label:</b>');

    var labelInput = $('<input>').addClass('form-control').attr('placeholder', 'Change the label').val(label.text())
    labelInput.on('input', function () {
        label.html("<b>" + $(this).val() + "</b>");
    });
    return innerBox.append(LabelName).append(labelInput);
}

function appendTextPlaceHolder(innerBox) {
    var placeHolderLabel = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Placeholder:</b>');

    var placeholderInput = $('<input>').addClass('form-control').attr('placeholder', 'Change placeholder content').val(currenttextarea.attr('placeholder'));

    placeholderInput.on('input', function () {
        var newPlaceholder = $(this).val();
        currenttextarea.attr('placeholder', newPlaceholder)
        
    });

    return innerBox.append(placeHolderLabel).append(placeholderInput);
}

function appendTextIdName(innerBox){
    var IdNameLabel = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Id Name:</b>');

    var IdNameInput  = $('<input>').addClass('form-control').attr('placeholder', 'Change the id').val(currenttextarea.attr('id'));

    IdNameInput.on('input', function () {
        var newIdName = $(this).val();
        currenttextarea.attr('id', newIdName)
        // updateTeaxtIdName(currentIdName,newIdName)
    });

    return innerBox.append(IdNameLabel).append(IdNameInput);
}

function updateTextPlaceholder(currenttextarea, newPlaceholder) {
     currenttextarea.attr('placeholder', newPlaceholder);
}

function updateTeaxtIdName(currentIdName,newIdName){
    currentIdName.attr('id',newIdName)
}

$('#form-content').on('click', '.textAreaElement', function () {
    label = $(this).find('label');
    currenttextarea = $(this).find('textarea');
    currentIdName= $(this).find('textarea');
    textAreaSetting();
});
