"use strict";

var gulp = require('gulp');
var Config = require('./gulpfile.config');

var config = new Config();

gulp.task('index', function () {
    return gulp.src(config.app.index)
        .pipe(gulp.dest('public'))
});