
var checkBoxLabelName;
var checkboxlabelOption;
var checkboxOptionInput;
var newCheckBoxOptionCounter = 3;
var Id;

$('#form-content').on('click', ' .checkBoxOuterDiv', function () {
    Id = $(this).find('.custom-checkbox-group').attr('id');

    checkBoxLabelName = $(this).find('.checkBoxLabel label');
    currentRadioNameAttribute = $(this).find('input[type="radio"]');
    checkboxlabelOption = $(this).find('.custom-checkbox-group label');
    checkboxOptionInput = $(this).find('.custom-checkbox-group input');

    checkBoxFieldSetting()
});

function checkBoxFieldSetting() {
    var outerBox = createOuterBox();

    var checkBoxLabelInnerBox = createInnerBox();
    appendLabelNameForCheckBox(checkBoxLabelInnerBox);
    outerBox.append(checkBoxLabelInnerBox);

    var checkboxOptionInnerbox = createInnerBoxForCheckBoxOption();
    appendCheckboxOption(checkboxOptionInnerbox);
    outerBox.append(checkboxOptionInnerbox);

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

function createInnerBoxForCheckBoxOption() {
    return $('<div>').css({
        "width": "100%",
        "height": "auto",
        "margin-bottom": "10px",
        "border": "1px solid #ccc",
        "padding": "10px"
    });
}

function appendLabelNameForCheckBox(checkBoxLabelInnerBox) {
    var LabelName = $("<label>").css({
        "fontSize": "17px",
        'marginBottom': '5px',
        "display": "block"
    }).html('<b>ChackBox Label Name:</b>');
    // labelGropName = $('.labelGroupName').find('label'); 
    var labelInput = $('<input>').addClass('form-control').attr('placeholder', 'Change the label').val(checkBoxLabelName.text())
    labelInput.on('input', function () {
        checkBoxLabelName.html("<b>" + $(this).val() + "</b>");
    });

    checkBoxLabelInnerBox.append(LabelName).append(labelInput);
}

function appendCheckboxOption(checkboxOptionInnerbox) {
    var checkboxOptionlabel = $("<label>").css({
        "fontSize": "17px",

    }).html('<b>Option Setting:</b>');

    var checkboxOptionSettingDiv = $('<div>').css({
        'marginBottom': '5px',
        "display": "flex",
        "justifyContent": "space-between"
    })

    var chackboxMessage = $('<div>').attr('id', 'checkboxMessage');

    var table = $("<table>").addClass("table table-bordered");
    var thead = $("<thead>").appendTo(table);
    var tbody = $("<tbody>").appendTo(table);

    var headerRow = $("<tr>").appendTo(thead);
    $("<th>").text("checkboxLabel").appendTo(headerRow);
    $("<th>").text("Value").appendTo(headerRow);
    $("<th>").text("Name Attr").appendTo(headerRow);
    $("<th>").text("Id Attr").appendTo(headerRow);

    for (var i = 0; i < (checkboxlabelOption ? checkboxlabelOption.length : 0); i++) {
        appendCheckboxOptionRow(tbody, i);
    }
    var buttonDiv = $('<div>').css({
        "height": "10%",
        "width": "20%",
        "display": "flex",
        "justifyContent": "space-between"
    })

    var addButton = $("<button>")
        .addClass("btn btn-primary")
        .css({
            "height": "100%",

        })
        .html('<i class="fa-solid fa-plus"></i>')
        .on('click', function () {
            addNewCheckboxOption();
        });

    var deleteButton = $("<button>")
        .addClass("btn btn-danger")
        .css({
            "height": "10%"
        })
        .html('<i class="fa-solid fa-trash"></i>')
        .on('click', function () {
            deleteCheckboxOption();
        });
    buttonDiv.append(addButton, deleteButton)

    checkboxOptionSettingDiv.append(checkboxOptionlabel, buttonDiv)

    checkboxOptionInnerbox.append(checkboxOptionSettingDiv,chackboxMessage, table);
}

function appendCheckboxOptionRow(tbody, i) {
    var row = $("<tr>").appendTo(tbody);

    var checkLabelInputField = $("<input>").addClass("form-control").attr("placeholder", "New Option Name").val(checkboxlabelOption.eq(i).text());
    checkLabelInputField.on('input', (function (index) {
        return function () {
            var newValue = $(this).val();
            checkboxlabelOption.eq(index).text(" " + newValue);
        };
    })(i));
    $("<td>").append(checkLabelInputField).appendTo(row);

    var checkboxValueField = $("<input>").addClass("form-control newValue").attr("placeholder", "New Value").attr('value', checkboxOptionInput.eq(i).attr('value')).val(checkboxOptionInput.eq(i).attr('value'));
    checkboxValueField.on('input', (function (index) {
        return function () {
            checkboxOptionInput.eq(index).attr('value', $(this).val().toLowerCase())
        };
    })(i));
    $("<td>").append(checkboxValueField).appendTo(row);

    var checkboxNameAttr = $("<input>").addClass("form-control newValue").attr("placeholder", "New Name Attr").attr('value', checkboxOptionInput.eq(i).attr('name')).val(checkboxOptionInput.eq(i).attr('name'));
    checkboxNameAttr.on('input', (function (index) {
        return function () {
            checkboxOptionInput.eq(index).attr('name', $(this).val().toLowerCase())
        };
    })(i));
    $("<td>").append(checkboxNameAttr).appendTo(row);

    var checkboxIdAttr = $("<input>").addClass("form-control").attr("placeholder", "New Id Attr").attr('id', checkboxOptionInput.eq(i).attr('id')).val(checkboxOptionInput.eq(i).attr('id'));
    checkboxIdAttr.on('input', (function (index) {
        return function () {
            var newValue = $(this).val();
            checkboxOptionInput.eq(index).attr('id', newValue);
        }
    })(i));
    $("<td>").append(checkboxIdAttr).appendTo(row);
}

function addNewCheckboxOption() {

    if (checkboxlabelOption.length < 7) {
        var checkboxinnerDiv = $("<div>").addClass("custom-checkbox");

        var checkboxOptionLabelNew = $("<input>")
            .attr({
                type: "checkbox",
                name: "checkboxGroup" + newCheckBoxOptionCounter,
                id: "checkBoxId" + newCheckBoxOptionCounter,
                value: "checkBox" + newCheckBoxOptionCounter,
            })
            .addClass("custom-checkbox-input");

        var newCheckboxLabel = $("<label>")
            .css({
                "fontSize": "16px",
                "marginLeft": "5px"
            })
            .attr('for', "checkBoxId" + newCheckBoxOptionCounter)
            .html("checkBox" + newCheckBoxOptionCounter,);

        checkboxinnerDiv.append(checkboxOptionLabelNew).append(newCheckboxLabel);

        $('#' + Id).append(checkboxinnerDiv);

        newCheckBoxOptionCounter++

        checkboxlabelOption = $(`#${Id}`).find('label');
        checkboxOptionInput = $(`#${Id}`).find('input');

        checkBoxFieldSetting();
    } else {
        var messageContainer = $('#checkboxMessage');
        messageContainer.html(
            '<div class="alert alert-danger">Not Add More Option</div>');
        setTimeout(function () {
            messageContainer.html('');
        }, 3000);
    }


}

function deleteCheckboxOption() {
    var id = $('#' + Id).find('.custom-checkbox:last')
    id.remove()

    checkboxlabelOption = $(`#${Id}`).find('label');
    checkboxOptionInput = $(`#${Id}`).find('input');

    checkBoxFieldSetting();
}