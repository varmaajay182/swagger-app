


var inputFiledCounter = 1
var textareaCounter = 1
var selectCounter = 1
var radioCounter = 1
var checkboxCounter = 1
var fileUploadCounter = 1;
var buttonCounter = 1;
var getDiv;


function createInputField(button) {
    $.getScript("formBuilder-asset/js/componentSetting/inputFieldSetting.js", function () {
        // 
        var inputOuterdiv = $("<div>")
            .addClass("form-group inputbox")
            .css({
                "display": "flex",
                "alignItems": "center",
                "width": "100%",
                "height": "8%",
                "marginBottom": "10px",
                "marginTop": "10px"
            });

        var label = $("<label style='width: 20%; margin-left: 36px; font-size:20px'><b>InputField" +
            inputFiledCounter + ": </b></label>");

        var inputField = $(
            `<input type='text' class='form-control' id='idName${inputFiledCounter}' name='nameatrribute${inputFiledCounter}' placeholder='Please enter something...' style='width: 70%; height:64%; margin-top: 10px; margin-bottom: 10px'>`
        );

        inputOuterdiv.click(function (event) {
            if (getDiv) {
                removeBackgroundColor(getDiv)
            }
            getDiv = $(this)
            addBackgroundColor(getDiv);
            inputFieldSetting()
        });


        $(inputOuterdiv).append(label).append(inputField).append(button);


        applyHover(inputOuterdiv)

        button.click(function () {
            deleteElement(inputOuterdiv)
        })

        inputFiledCounter++;
        $('#form-content').append(inputOuterdiv);
    });
}


function createTextArea(button) {
    $.getScript("formBuilder-asset/js/componentSetting/textAreaFieldSetting.js", function () {
        // return console.log(div);

        var label = $("<label style='width: 20%; margin-left: 36px; font-size:20px'><b>TextArea" +
            textareaCounter + ": </b></label>")
        var textArea = $(
            "<textarea type='text' id='textAreaId" + textareaCounter + "' class='form-control' placeholder='TextArea " + textareaCounter +
            "' style='width: 70%; height:64%; margin-top: 10px; margin-bottom: 10px'>"
        );


        var newDiv = $("<div>")
            .addClass("textAreaElement inputbox")
            .append(label)
            .css({
                "display": "flex",
                "marginTop": "10px",
                "alignItems": "center",
                "width": "100%",
                "transition": "background-color 0.3s"
            })
            .attr('id', 'textAreaElementId' + textareaCounter)
            .append(textArea)
            .append(button)

        newDiv.hover(
            function () {

                $('.cancel', this).css({
                    'display': 'block'
                });
            },
            function () {

                $('.cancel', this).css({
                    'display': 'none'
                });
            }
        );

        newDiv.click(function (event) {
            if (getDiv) {
                removeBackgroundColor(getDiv)
            }
            getDiv = $(this)
            addBackgroundColor(getDiv);
            textAreaSetting()
        });

        applyHover(newDiv)

        button.click(function () {
            deleteElement(newDiv)
        })


        textareaCounter++
        $('#form-content').append(newDiv)
    });
}

function createSelectField(button) {
    $.getScript("formBuilder-asset/js/componentSetting/selectFieldSetting.js", function () {

        var select = $("<select>")
            .attr("name", "select" + selectCounter)
            .attr("id", "selectId" + selectCounter)
            .addClass("custom-select form-select")
            .css({
                "width": "70%",
                "marginTop": "10px",
                "marginBottom": "10px",
                "height": "40%"
            })


        var label = $("<label>")
            .addClass("custom-label")
            .css({
                "width": "20%",
                "fontSize": "20px",
                "marginLeft": "36px"
            })
            .html("<b> Select " + selectCounter + " : </b> ");

        var option1 = $("<option>").text("Option 1");
        var option2 = $("<option>").text("Option 2");



        select.append(option1).append(option2);

        var containerDiv = $("<div>")
            .addClass("custom-container inputbox")
            .css({
                // "background-color": "#f0f0f0",
                // "padding": "10px",
                "width": "100%",
                "height": "11%",
                "marginBottom": "10px",
                "marginTop": "10px",
                "display": "flex",
                "alignItems": "center",
                "transition": "background-color 0.3s"
            })
            .append(label)
            .append(select)
            .append(button)

        containerDiv.hover(
            function () {

                $('.cancel', this).css({
                    'display': 'block'
                });
            },
            function () {

                $('.cancel', this).css({
                    'display': 'none'
                });
            }
        );

        containerDiv.click(function (event) {
            if (getDiv) {
                removeBackgroundColor(getDiv)
            }
            getDiv = $(this)
            addBackgroundColor(getDiv);

            selectFieldSetting()
        });

        applyHover(containerDiv)

        button.click(function () {
            deleteElement(containerDiv)
        })

        selectCounter++;
        return $("#form-content").append(containerDiv);
    });

}

function createRadio(button) {
    $.getScript("formBuilder-asset/js/componentSetting/radioSetting.js", function () {
        var radioGroup = $("<div>").addClass("radioGroup gap-3").attr('id', 'radioGroupId' + radioCounter);

        var radioOuterDiv = $("<div>").attr('id', 'radioId' + radioCounter).css({
            "width": "100%",
            "height": "10%",
            "marginTop": "10px",
            "display": "flex",
            "align-items": "center",
            "transition": "background-color 0.3s"
            // "background-color": "#f0f0f0c8"
        }).addClass("outer-div inputbox")

        radioOuterDiv.on("click", function () {
            if (getDiv) {
                removeBackgroundColor(getDiv)
            }
            getDiv = $(this)
            addBackgroundColor(getDiv);

            radioSetting();
        });

        for (var i = 1; i <= 2; i++) {
            var innerDiv = $("<div>").addClass("inner-div d-flex align-items-center radiogrouplabel").attr('id', 'innerDiv' + i);
            var radio = $("<input>").attr({
                "type": "radio",
                "name": "radioGroup" + radioCounter,
                "id": "radio" + radioCounter + "option" + i,
                "value": " Option " + i
            }).css("margin-right", "5px");

            var label = $("<label>").attr("for", "radio" + radioCounter + "option" + i).html(" Option " + i);

            innerDiv.append(radio).append(label);
            radioGroup.append(innerDiv);
        }

        var labelGropName = $("<div>").addClass('labelGroupName').css({
            "margin-left": "36px",
            "width": "20%",
        })

        var labelGroup = $("<label>").html("<b>Radio Group " + radioCounter + " : </b>").css({
            "font-size": "20px"
        });

        labelGropName.append(labelGroup)

        radioCounter++;
        radioOuterDiv.append(labelGropName).append(radioGroup).append(button)


        applyHover(radioOuterDiv)

        button.click(function () {
            deleteElement(radioOuterDiv)
        })

        $("#form-content").append(radioOuterDiv);


    });
}

function createCheckbox(button) {
    $.getScript("formBuilder-asset/js/componentSetting/checkBoxSetting.js", function () {
        var checkBoxOuterDiv = $("<div>").addClass("d-flex checkBoxOuterDiv inputbox").css({
            // "background-color": "#f0f0f0c8",
            "padding": "10px",
            "marginTop": "10px",
            "marginBottom": "10px",
            "width": "100%"
        });

        var checkboxGroup = $("<div>").addClass("custom-checkbox-group").attr('id', 'checkboxIdGroup' + checkboxCounter);

        var checkBoxLabel = $('<div>').addClass('checkBoxLabel').css({
            "margin-left": "36px",
            "width": "20%",
        })
        var labelGroup = $("<label>")
            .html("<b>Check Box " + checkboxCounter + " : </b>")
            .css({
                "fontSize": "20px"
            });

        for (var i = 1; i <= 2; i++) {
            var checkboxDiv = $("<div>").addClass("custom-checkbox");

            var checkbox = $("<input>")
                .attr({
                    type: "checkbox",
                    name: "checkboxGroup" + i,
                    id: "checkBoxId" + i,
                    value: "checkBoxValue" + i,
                })
                .addClass("custom-checkbox-input");

            var label = $("<label>")
                .css({
                    "fontSize": "16px",
                    "marginLeft": "5px"
                })
                .attr('for', "checkBoxId" + i)
                .html("checkBox" + i,);

            checkboxDiv.append(checkbox).append(label);
            checkboxGroup.append(checkboxDiv);

        }

        applyHover(checkBoxOuterDiv)

        button.click(function () {
            deleteElement(checkBoxOuterDiv)
        })

        checkBoxOuterDiv.click(function () {
            if (getDiv) {
                removeBackgroundColor(getDiv)
            }
            getDiv = $(this)
            addBackgroundColor(getDiv);
            checkBoxFieldSetting()
        });
        checkBoxLabel.append(labelGroup)
        checkBoxOuterDiv.append(checkBoxLabel).append(checkboxGroup).append(button)
        checkboxCounter++;

        $("#form-content").append(checkBoxOuterDiv);
    });
}

function createFileUpload(button) {

    $.getScript("formBuilder-asset/js/componentSetting/fileUploadSetting.js", function () {
        var fileUpload = $("<input>")
            .attr({
                type: "file",
                name: "fileUpload" + fileUploadCounter,
            })
            .addClass("custom-file-upload");

        var label = $("<label>")
            .css({
                "width": "20%",
                "fontSize": "20px",
                "marginLeft": "31px"
            })
            .html("<b>File Upload " + fileUploadCounter + " : </b>");

        var containerDiv = $("<div>")
            .addClass("file-container inputbox")
            .css({
                // "background-color": "#f0f0f0",
                "display": "flex",
                "padding": "10px",
                "marginBottom": "10px",
                "marginTop": "10px"
            })
            .append(label)
            .append(fileUpload)
            .append(button)

        containerDiv.on("click", function () {
            if (getDiv) {
                removeBackgroundColor(getDiv)
            }
            getDiv = $(this)
            addBackgroundColor(getDiv);

            fileUploadSetting();
        });

        applyHover(containerDiv)

        button.click(function () {
            deleteElement(containerDiv)
        })

        fileUploadCounter++;
        $("#form-content").append(containerDiv);

    });
}

function createButton(button) {
    $.getScript("formBuilder-asset/js/componentSetting/buttonSetting.js", function () {
        var buttonFeild = $("<button>")
            .attr({
                type: "submit",
                name: "button" + buttonCounter,
            })
            .css({
                "marginLeft": "36px",
                // "width":"50%"

            })
            .addClass("btn btn-primary")

            .html("Button " + buttonCounter);

        var containerDiv = $("<div>")
            .addClass("button-container inputbox")
            .css({
                "width": "100%",
                "display": "flex",
                "padding": "10px",
                "marginBottom": "10px",
                "marginTop": "10px",
                'height': '8%',
                // "justifyContent":"center"
            })
            .append(buttonFeild)
            .append(button)

        containerDiv.on("click", function () {
            if (getDiv) {
                removeBackgroundColor(getDiv)
            }
            getDiv = $(this)
            addBackgroundColor(getDiv);

            buttonSetting();
        });

        applyHover(containerDiv)

        button.click(function () {
            deleteElement(containerDiv)
        })

        buttonCounter++;
        $("#form-content").append(containerDiv);
    });
}

function addBackgroundColor(getDiv) {
    getDiv.css({
        "backgroundColor": "rgb(150 227 178)",
        "borderLeft": "7px solid rgb(57 151 86)"
    })
}

function removeBackgroundColor(getDiv) {
    getDiv.css({
        'backgroundColor': "",
        "borderLeft": ""
    })
}

function applyHover(getDivForHover) {

    getDivForHover.hover(
        function () {

            $('.cancel', this).css({
                'display': 'block'
            });
        },
        function () {

            $('.cancel', this).css({
                'display': 'none'
            });
        }
    );
}

function deleteElement(getDivForDelete) {

  
    Swal.fire({
        title: 'Are you sure?',
        // width:'100px',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {   
            // console.log(getDivForDelete)
            getDivForDelete.remove();
            var elementsSetting = $('#element-setting').empty();
            Swal.fire(
                'Deleted!',
                'Your item has been deleted.',
                'success'
            );
        }
    });
}




