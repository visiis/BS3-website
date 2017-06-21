/**
 * Created by 第九界限 on 2017/6/14.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');


gulp.task('default', function() {

});

gulp.task('concat', function() {
    gulp.src(['./src/scss/main.css','./src/scss/main1.css'])
        .pipe(concat('css.css'))
        .pipe(gulp.dest('./dist/scss'));
});

gulp.task('min-scss',function(){
    gulp.src('./src/scss/*.min.css')
        .pipe(concat('index.css'))
        .pipe(minify())
        .pipe(gulp.dest('./dist/scss'));
});