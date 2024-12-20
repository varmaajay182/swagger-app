var buttonLabelName;

$('#form-content').on('click', ' .button-container', function () {

    buttonLabelName = $(this).find('button:first');
    // console.log(buttonLabelName)
    fileInput = $(this).find('input');

    buttonSetting()
});


function buttonSetting(){
    // console.log('button')
    var outerBox = createButtonOuterBox();

    var buttonlabelInnerbox = createButtonInnerBox();
    appendLabelNameForButton(buttonlabelInnerbox);
    outerBox.append(buttonlabelInnerbox);

    
    $('#element-setting').empty();
    $('#element-setting').append(outerBox);

}

function createButtonOuterBox() {
    return $('<div>').css({
        "width": "95%",
        "height": "94%",
    });
}

function createButtonInnerBox() {
    return $('<div>').css({
        "width": "100%",
        "height": "15%",
        "margin-bottom": "10px",
        "border": "1px solid #ccc",
        "padding": "10px"
    });
}

function appendLabelNameForButton(buttoninnerBox){
    var LabelName = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px',
        "display": "block"
    }).html('<b>Button Label Name:</b>');
 
    var labelInput = $('<input>').addClass('form-control').attr('placeholder', 'Change thee label').val(buttonLabelName.text())
    labelInput.on('input', function () {
        buttonLabelName.html("<b>" + $(this).val() + "</b>");
    });

    buttoninnerBox.append(LabelName).append(labelInput);
}