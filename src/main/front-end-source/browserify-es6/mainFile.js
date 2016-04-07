var polygonModule = require('./polygonModule');

/**
 * this file illustrates the interfacing of browserified code
 * with code in the browser environment
 * 
 * Javascript in the browser doesn't support browserify so this
 * function bridges out of the world of 'require' and into the
 * normal browser world by assigning the browserify functionality
 * to a global variable on the winow object.
 * 
 * @param {type} param
 */

$('document').ready(function () {
    //this is the main interface require code must be evoked with new
    window.polygonFactory = new polygonModule();
    //evokePolygon is called by a onclick method in the html page
    window.evokePolygon = function ()
    {
        var item = polygonFactory.create(3, 'square');
        var info = "from es6 code: " + item.name + " " + item.area + '<br/>';

        $('#es6TextArea').append(info);
    }
});