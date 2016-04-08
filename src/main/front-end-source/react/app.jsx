var React = require('react');
var ReactDom = require('react-dom');
var Component = require('./component.jsx');

var props =
        {
            title: "React Component",
            text: "from react"
        }



$('document').ready(function () {
    var mountPoint = $('#reactAttachment')[0];
    //document.querySelector('#reactAttachment')
    var element = React.createElement(Component, props);
    ReactDom.render(element, mountPoint);
});
 