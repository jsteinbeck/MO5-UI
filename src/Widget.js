/* global using */

using("MO5.dom.Element").define("MUI.Widget", function (Element) {
    
    function Widget () {
        
        Element.call(this);
        
        this.addCssClass("Widget");
    }
    
    Widget.prototype = new Element();
    
    Widget.prototype.add = function (widget) {
        this.addChild(widget);
        this.element.appendChild(widget.element);
    };
    
    Widget.prototype.remove = function (widget) {
        this.removeChild(widget);
        this.element.removeChild(widget.element);
    };
    
    return Widget;
    
});
