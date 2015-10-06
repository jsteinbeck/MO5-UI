/* global using */

(function () {
    
    var scripts, path = "";
    
    try {
        scripts = document.getElementsByTagName("script");
        path = scripts[scripts.length - 1].src.replace(/paths\.js$/, "");
    }
    catch (error) {
        console.error(error);
    }
    
    using.modules["MUI.Widget"] = path + "Widget.js";
    using.modules["MUI.Label"] = path + "Label.js";
    using.modules["MUI.Button"] = path + "Button.js";
    
}());
