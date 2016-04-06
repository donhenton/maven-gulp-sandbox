#Maven Gulp Integration
 
This project demonstrates using using the [maven frontend plugin] 
(https://github.com/eirslett/frontend-maven-plugin/)

The plugin is evoked by the install phase, and is set to write its output
(say from gulp minify) to the source tree section. It writes to src/main/webapp/resources
which is NOT saved to git. At this location it is incorporated into the war
file

```
mvn clean install war:war jetty:run
```

##Simple Exec Command

In the pom.xml a second method is included using simple exec commands to
execute gulp, sass, npm and bower. This assumes that these items are pre-
installed.


 
