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
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

//must be passed in via pom.xml evocation of this file
var targetWebappFolder = 'target/'+argv.dir;
//var targetWebappFolder = 'src/main/webapp/resources/';

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }
  console.log(error);
  
};


var app = {
    cssTarget: targetWebappFolder+'/css',
    jsTarget: targetWebappFolder+'/js',
    jsSource: 'src/main/front-end-source/js',
    sassSource: 'src/main/front-end-source/scss'};

var bundler = browserify({
    entries: ['./src/main/front-end-source/browserify-es6/mainFile.js'],
    transform: [["babelify", { "presets": ["es2015"] }]],
    extensions: ['.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
});
function bundle() {
    return bundler
            .bundle()
            .on('error', notify);

}

gulp.task('browserify-js', function ( ) {

    bundle()
              .pipe(source('browserify-stuff.min.js'))
              .pipe(streamify(uglify()))
              .pipe(gulp.dest(app.jsTarget));

});


gulp.task('minify-copy-js', function () {

    gulp.src([app.jsSource + "/**/*.js", 'bower_components/jquery/dist/jquery.js'])

            .pipe(concat('appCode.min.js',
              {newLine: '\n\/*------------- end concat file--------------------*/\n;'}))
            .pipe(uglify({mangle: true}))
            .pipe(gulp.dest(app.jsTarget));

});

gulp.task('clean', function ( ) {

    del.sync([ targetWebappFolder]);

});




gulp.task('minify-copy-sass', function () {



    gulp.src(app.sassSource+'/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('app.min.css'))
            .pipe(uglifycss())
            .pipe(gulp.dest(app.cssTarget)) 

    ;

});





//gulp.task('default', ['minify-copy-js','minify-copy-sass']);
gulp.task('default', ['clean','browserify-js','minify-copy-js','minify-copy-sass' ]);