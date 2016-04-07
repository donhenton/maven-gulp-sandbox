var gulp = require('gulp');
var del = require('del');
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var replace = require('gulp-html-replace');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var argv = require('yargs').argv;

//must be passed in via pom.xml evocation of this file
var targetWebappFolder = 'target/'+argv.dir;
//var targetWebappFolder = 'src/main/webapp/resources/';


var app = {
    cssTarget: targetWebappFolder+'/css',
    jsTarget: targetWebappFolder+'/js',
    jsSource: 'src/main/front-end-source/js',
    sassSource: 'src/main/front-end-source/scss'};

//gulp.task('clean', function ( ) {
//
//    del.sync([app.cssTarget, app.jsTarget]);
//
//});


gulp.task('minify-copy-js', function () {

    gulp.src([app.jsSource + "/**/*.js", 'bower_components/jquery/dist/jquery.js'])

            .pipe(concat('appCode.min.js',
                    {newLine: '\n\/*------------- end concat file--------------------*/\n;'}))
            .pipe(uglify({mangle: true}))
            .pipe(gulp.dest(app.jsTarget));

});


gulp.task('minify-copy-sass', function () {



    gulp.src(app.sassSource+'/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('app.min.css'))
            .pipe(uglifycss())
            .pipe(gulp.dest(app.cssTarget)) 

    ;

});





gulp.task('default', ['minify-copy-js','minify-copy-sass']);