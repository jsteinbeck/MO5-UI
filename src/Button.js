/* global using */

using("MUI.Widget", "MUI.Label").define("MUI.Button", function (Widget, Label) {
    
    function Button (text) {
        
        var self = this;
        
        Widget.call(this);
        
        this._listeners = {
            click: function (event) {
                self.trigger("click", event);
            }
        };
        
        this._text = new Label(text || "OK");
        
        this.add(this._text);
        
        this.addCssClass("Button");
        
        this._addListeners();
    }
    
    Button.prototype = new Widget();
    
    Button.prototype.setText = function (text) {
        this._text.setText(text);
    };
    
    Button.prototype.getText = function () {
        return this._text.getText();
    };
    
    Button.prototype.text = function (text) {
        return this._text.text(text);
    };
    
    Button.prototype.click = function (event) {
        this.trigger("click", event);
    };
    
    Button.prototype.destroy = function () {
        this._removeListeners();
        Widget.prototype.destroy.call(this);
    };
    
    Button.prototype._addListeners = function () {
        for (var key in this._listeners) {
            this.element.addEventListener(key, this._listeners[key]);
        }
    };
    
    Button.prototype._removeListeners = function () {
        for (var key in this._listeners) {
            this.element.removeEventListener(key, this._listeners[key]);
        }
    };
    
    return Button;
    
});
