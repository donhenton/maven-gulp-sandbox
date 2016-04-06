var gulp = require('gulp');
var del = require('del');
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var replace = require('gulp-html-replace');
var gutil = require('gulp-util');

var app = {
    cssTarget:'src/main/webapp/resources/css', 
    jsTarget:'src/main/webapp/resources/js' ,
    jsSource: 'src/main/front-end-source/js',
    cssSource: 'src/main/front-end-source/css'};

gulp.task('clean', function ( ) {

    del.sync([app.cssTarget, app.jsTarget]);

});


gulp.task('minify-copy-js', function () {

    gulp.src([app.jsSource+"/**/*.js",'bower_components/jquery/dist/jquery.js' ])

            .pipe(concat('appCode.min.js',
               {newLine: '\n\/*------------- end concat file--------------------*/\n;'}))
            .pipe(uglify({mangle: true}))
            .pipe(gulp.dest(app.jsTarget));

});


gulp.task('build', ['clean', 'minify-copy-js']);