/* global using */

using("MUI.Widget").define("MUI.Label", function (Widget) {
    
    function Label (text) {
        
        Widget.call(this);
        
        if (arguments.length) {
            this.setText(text);
        }
        
        this.addCssClass("Label");
    }
    
    Label.prototype = new Widget();
    
    Label.prototype.setText = function (text) {
        
        this.innerHTML(text);
        
        return this;
    };
    
    Label.prototype.getText = function () {
        return this.innerHTML();
    };
    
    Label.prototype.text = function (text) {
        
        if (arguments.length) {
            this.setText(text);
        }
        
        return this.getText();
    };
    
    return Label;
    
});
