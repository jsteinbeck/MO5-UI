/* global using */

using("MUI.Widget", "MUI.Label", "MUI.Button").
run(function (Widget, Label, Button) {
    
    var container = new Widget();
    var button = new Button("A Button");
    var text = new Label("Click this button:");
    
    button.subscribe("click", function () {
        console.log("Button was clicked.");
        alert("The button was clicked!");
    });
    
    container.add(text);
    container.add(button);
    
    container.appendTo(document.body);
    
});
