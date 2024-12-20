
var fileLabelName;
var fileInput;

$('#form-content').on('click', ' .file-container', function () {

    fileLabelName = $(this).find('label');
    fileInput = $(this).find('input');

    fileUploadSetting()
});

function fileUploadSetting(){
    var outerBox = createOuterBox();

    var fileInnerBox = createInnerBox();
    appendLabelNameForFile(fileInnerBox);
    outerBox.append(fileInnerBox);

    var nameAttrInnebox = createInnerBox();
    appendFileNameAttribute(nameAttrInnebox);
    outerBox.append(nameAttrInnebox);

    var fileIdInnerbox = createInnerBox();
    appendfileIdName(fileIdInnerbox)
    outerBox.append(fileIdInnerbox)

    $('#element-setting').empty();
    $('#element-setting').append(outerBox);
}

function createOuterBox() {
    return $('<div>').css({
        "width": "95%",
        "height": "94%",
    });
}

function createInnerBox() {
    return $('<div>').css({
        "width": "100%",
        "height": "15%",
        "margin-bottom": "10px",
        "border": "1px solid #ccc",
        "padding": "10px"
    });
}

function appendLabelNameForFile(fileInnerBox){
    var LabelName = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px',
        "display": "block"
    }).html('<b>File Label Name:</b>');
    // labelGropName = $('.labelGroupName').find('label'); 
    var labelInput = $('<input>').addClass('form-control').attr('placeholder', 'Change the label').val(fileLabelName.text())
    labelInput.on('input', function () {
        fileLabelName.html("<b>" + $(this).val() + "</b>");
    });

    fileInnerBox.append(LabelName).append(labelInput);
}

function appendFileNameAttribute(innerBox) {
    var fileNameAttributeLabel = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px',
        "display": "block"
    }).html('<b>Name:</b>');

    var fileNameAttributeInput = $('<input>').addClass('form-control').attr('placeholder', 'Change the nameAttribute').val(fileInput.attr('name'));

    fileNameAttributeInput.on('input', function () {
        var nameAttribute = $(this).val();
        fileInput.attr('name', nameAttribute.toLowerCase())
    });

    innerBox.append(fileNameAttributeLabel).append(fileNameAttributeInput);
}

function appendfileIdName(innerBox){
    var IdNameLabel = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Id Attr:</b>');

    var IdNameInput  = $('<input>').addClass('form-control').attr('placeholder', 'Change the id').val(fileInput.attr('id'));

    IdNameInput.on('input', function () {
        var newIdName = $(this).val();
        fileInput.attr('id', newIdName.toLowerCase())
    });

    return innerBox.append(IdNameLabel).append(IdNameInput);
}