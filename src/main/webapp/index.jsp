<%-- 
    Document   : index
    Created on : Apr 7, 2016, 8:05:40 AM
    Author     : dhenton
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Start Page</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/app.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/appCode.min.js" type="text/javascript"></script>
        <script src="js/browserify-stuff.min.js" type="text/javascript"></script>
        <script src="js/reactify-stuff.min.js" type="text/javascript"></script>
    </head>
    <body>
        <h1>Maven Gulp Demonstration</h1>

        <section id="alpha"> 
            <div id="red">Red stuff</div>
            <div id="blue">Blue stuff</div>
            <div id="green">Green stuff</div>

        </section>

        <p><a href="<%= request.getContextPath()%>/test">Java Servlet Code</a></p>

        <div class="demoBlock">
            <h4>ES6 Demo</h4>
            <button onclick="evokePolygon() ">Call ES6 Code</button>

            <p>Click on the button above to evoke browserify/babelify Code</p>

            <div id="es6TextArea"></div>
        </div>
        
        
        
        <div class="demoBlock">
            <h4>Concatenated JS demo</h4>
            <button onclick="doSomething()">Do Something</button>

            <p>Click on the button above to do something</p>

            <div id="textArea"></div>
        </div>
        
        <div class="demoBlock">
            <h4>React Code</h4>
            <div id="reactAttachment"></div>
        </div>

    </body>
</html>

