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
    return gulp.src(config.vendors.css.concat(config.app.css))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(dev_folder))
});

gulp.task('js', function () {
    return gulp.src(config.app.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(dev_folder))
});

gulp.task('vendors-js', function () {
    return gulp.src(config.vendors.js)
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(dev_folder))
});