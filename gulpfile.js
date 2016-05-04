var gulp = require('gulp');
var includer = require('gulp-htmlincluder');
 
 
gulp.task('htmlIncluder', function() {
    gulp.src('files/*.html')
    	.pipe(includer())
        .pipe(gulp.dest('./'));
});



gulp.task('default',[
	'htmlIncluder',
	'watcher'
]);

gulp.task('watcher',function(){
    gulp.watch("files/*.html",['htmlIncluder']);
	return false;			
});
