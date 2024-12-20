var label;
// var currentPlaceholderInput;
var currentIdName;

function selectFieldSetting() {
    // console.log('selectFieldSetting')
    var outerBox = createOuterBox();

    var labelInnerBox = createInnerBox();
    appendSelectTagLabelName(labelInnerBox);
    outerBox.append(labelInnerBox);

    var selectIdInnerBox = createInnerBox();
    appendSelectFeildIdName(selectIdInnerBox)
    outerBox.append(selectIdInnerBox)

    var optionInnerBox = createInnerBox();
    appendOption(selectIdInnerBox)
    outerBox.append(selectIdInnerBox)

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

function appendSelectTagLabelName(innerBox) {
    var LabelName = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Label:</b>');

    var labelInput = $('<input>').addClass('form-control').attr('placeholder', 'Change select tag the label').val(label.text())
    labelInput.on('input', function () {
        label.html("<b>" + $(this).val() + "</b>");
    });
   innerBox.append(LabelName).append(labelInput);
}


function appendSelectFeildIdName(innerBox) {
    var IdNameLabel = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px'
    }).html('<b>Id Name:</b>');

    var IdNameInput = $('<input>').addClass('form-control').attr('placeholder', 'Change the id').val(currentIdName.attr('id'));

    IdNameInput.on('input', function () {
        var newIdName = $(this).val();
        currentIdName.attr('id', newIdName)
        // updateSelectFeildIdName(currentIdName, newIdName)
    });

    return innerBox.append(IdNameLabel).append(IdNameInput);
}

function appendOption() {

    // alert('hello')
}


function updateSelectFeildIdName(currentIdName, newIdName) {
    currentIdName.attr('id', newIdName)
}

$('#form-content').on('click', '.custom-container', function () {
    label = $(this).find('label');
    currentIdName = $(this).find('select');
    selectFieldSetting();
});
