"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var Config = require('./gulpfile.config');

var config = new Config();
var dev_folder = 'public';


gulp.task('index', function () {
    return gulp.src(config.app.index)
        .pipe(gulp.dest(dev_folder))
});

gulp.task('styles', function () {
    return gulp.src(config.app.css)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(dev_folder))
});