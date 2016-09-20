var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');

    
function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}


//Copy Task
//Copies font-awesome
gulp.task('copy', function(){
    gulp.src('static_src/font-awesome-4.6.3/**')
        .pipe(gulp.dest('static/font-awesome-4.6.3'));
});


//Scripts Task
//Uglifies JS
gulp.task('scripts', function(){
   gulp.src('static_src/js/*.js')
   .pipe(uglify())
   .on('error', errorLog)
   .pipe(gulp.dest('static/js'));
});
 
//Styles Task
//Uglifies
gulp.task('styles', function(){
    return gulp.src('static_src/sass/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
        }))
    .on('error', errorLog)
    .pipe(gulp.dest('static/css')); 
});

//Image Task
//Compress
gulp.task('image', function(){
    gulp.src('static_src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('static/images'));
});

//Watch Task
//Watches for changings
gulp.task('watch', function(){
    gulp.watch('static_src/**/*.js', ['scripts']);
    gulp.watch('static_src/sass/*.scss', ['styles']);
});

//Webserver Task
//Runs webserver
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      fallback: 'index.html',
      host: '0.0.0.0'
    }));
});

gulp.task('default', ['scripts', 'styles', 'watch', 'copy']);