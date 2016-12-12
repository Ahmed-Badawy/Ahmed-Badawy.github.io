var gulp = require('gulp');
var includer = require('gulp-htmlincluder');
var rename = require("gulp-rename");

 
gulp.task('htmlIncluder-ar', function() {
    gulp.src('files-ar/*.html')
    	.pipe(includer())
        .pipe(rename('cv-ar.html'))
        .pipe(gulp.dest('./'));
});
gulp.task('htmlIncluder-en', function() {
    gulp.src('files-en/*.html')
    	.pipe(includer())
        .pipe(rename('cv-en.html'))
        .pipe(gulp.dest('./'));
});




gulp.task('default',[
	'htmlIncluder-en',
	'htmlIncluder-ar',
	'watcher'
]);

gulp.task('watcher',function(){
    gulp.watch("files-ar/*.html",['htmlIncluder-ar']);
    gulp.watch("files-en/*.html",['htmlIncluder-en']);
	return false;
});
