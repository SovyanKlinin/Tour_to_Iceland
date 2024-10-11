'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const concatCss = require('gulp-concat-css');
const clean = require("gulp-clean");

function gulpLess(cb) {
    return gulp.src('src/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public/css'));
    cb();
}

function concat_css(cb) {
    return gulp.src('public/css/**/*.css')
        .pipe(concatCss("/styles.css"))
        .pipe(gulp.dest('css/'));
    cb();
}

function deletePublic(cb) {
    return gulp.src('./public', {allowEmpty: true}).pipe(clean())
    cb();
}

function deleteSrc(cb) {
    return gulp.src('./src', {allowEmpty: true}).pipe(clean())
    cb();
}

exports.default = gulp.series(gulpLess, concat_css, deletePublic, deleteSrc);