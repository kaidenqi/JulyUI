let gulp = require('gulp');
let jshint = require('gulp-jshint');

gulp.task('task_jshint', function(done){
    gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));

    done();
})