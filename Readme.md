#Maven Gulp Integration

**url for the application**: http://localhost:8090/maven-gulp-sandbox/

This project demonstrates using  the [maven frontend plugin] 
(https://github.com/eirslett/frontend-maven-plugin/)

The plugin is evoked by the install phase, and is set to write its output
(say from gulp minify) to the source tree section. It writes to src/main/webapp/resources
which is NOT saved to git. At this location it is incorporated into the war
file (Currently this method is commented out).

```
mvn clean install war:war jetty:run
```

##Simple Exec Command

In the pom.xml a second method is included using simple exec commands to
execute gulp, sass, npm and bower. This assumes that these items are pre-
installed.

This pathway is evoked by 

```
mvn clean jetty:run-war
```

OR
 
```
mvn clean package
```

The package phase calls a gulp file which prepares front end assets (e.g. sass, 
minification) and moves them into the appropriate location of the exploded war
components to eventually be packaged into the war.


