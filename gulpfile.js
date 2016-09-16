var gulp = require('gulp'),
    webserver = require('gulp-webserver');


gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      fallback: 'index.html',
      host: '0.0.0.0'
    }));
});