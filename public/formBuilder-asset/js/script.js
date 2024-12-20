

$(document).ready(function () {
    $.getScript("formBuilder-asset/js/createElement.js", function () {
        $('.tags').draggable({
            helper: 'clone',
            cursor: 'move',
         
            drag: function (event, ui) {
                ui.helper.width(100).height(50);
            }
        });
        $('#form-content').sortable()
        $('#form-content').droppable({
            drop: function (event, ui) {
              
                 
                var button = $("<button>")
                .attr({
                    type: "button",
                    class: "btn btn-link cancel",
                }).css({
                    "display": "none"
                })
                .append($("<i>").addClass("fa-regular fa-circle-xmark").css({
                    "fontSize": "130%",
                }));

               
                if (ui.helper.hasClass("inputTag")) {
                    var element = createInputField(button)
                } else if (ui.helper.hasClass("textArea")) {
                    var element = createTextArea(button)
                } else if (ui.helper.hasClass("selectfield")) {
                    var element = createSelectField(button)
                } else if (ui.helper.hasClass("radiofield")) {
                    var element = createRadio(button)
                } else if (ui.helper.hasClass("chackBox")) {
                    var element = createCheckbox(button)
                } else if (ui.helper.hasClass("fileUpload")) {
                    var element = createFileUpload(button)
                } else if (ui.helper.hasClass("button")) {
                    // console.log('hello')
                    var element = createButton(button);
                }


            }
        });
    });
});






