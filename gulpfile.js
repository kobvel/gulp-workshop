"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var Config = require('./gulpfile.config');

var config = new Config();
var dev_folder = 'public';

var styles = config.vendors.css.concat(config.app.css);

gulp.task('index', function () {
    return gulp.src(config.app.index)
        .pipe(gulp.dest(dev_folder))
});

gulp.task('styles', function () {
    return gulp.src(styles)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(dev_folder))
});

gulp.task('js', function () {
    return gulp.src(config.app.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dev_folder))
});

gulp.task('vendors-js', function () {
    return gulp.src(config.vendors.js)
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dev_folder))
});

gulp.task('watch', ['build'], function () {
    watch(config.app.js, function () {
        gulp.start('js');
    });

    watch(config.vendors.js, function () {
        gulp.start('vendors-js');
    });

    watch(config.app.index, function () {
        gulp.start('index');
    });

    watch(styles, function () {
        gulp.start('styles');
    });
});

gulp.task('build', ['index', 'styles', 'vendors-js', 'js']);
gulp.task('default', ['build']);
