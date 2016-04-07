var polygonModule = require('./polygonModule');



$('document').ready(function () {
    window.polygonFactory = new polygonModule();
    window.evokePolygon = function ()
    {
        var item = polygonFactory.create(3, 'square');
        var info = "from es6 code: " + item.name + " " + item.area + '<br/>';

        $('#es6TextArea').append(info);
    }
});