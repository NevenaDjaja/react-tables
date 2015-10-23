var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('scripts', function() {
  browserify('./public/view.js')
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./src'));
});

gulp.task('watch', function() {
  gulp.watch('./public/view.js', ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);