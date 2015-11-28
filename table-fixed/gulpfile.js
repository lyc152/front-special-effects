var gulp = require('gulp'),
    connect = require('gulp-connect');


gulp.task('connect', function () {
  connect.server({
    port: '9002',
    livereload: true
  });
});


gulp.task('default', ['connect']);

