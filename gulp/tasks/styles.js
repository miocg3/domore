var gulp =  require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var sass = require('gulp-sass');

gulp.task('styles', function(){
    console.log('styles postCSS task running');
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([nested, cssvars, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('stylesSass', function(){
    console.log('styles sass task running');
    return gulp.src('./app/assets/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/temp/styles'));
});