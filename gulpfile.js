/**
 * gulpfile
 *
 * Tasks to make development easier
 *
 **/
/*globals require*/

var gulp = require('gulp'),
    util = require('gulp-util'),
    jshint = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    bump = require('gulp-bump');

/**
 * scripts
 **/
gulp.task('scripts', ['scripts-validate', 'scripts-test', 'scripts-bundle']);

gulp.task('scripts-validate', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts-test', function () {
  return gulp.src('test/*.js')
    .pipe(jasmine());
});

gulp.task('scripts-bundle', function () {

  if (util.env.production) {
    return gulp.src('src/app.js')
      .pipe(browserify({
        debug: true
      }))
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(gulp.dest('bin/js'));
  } else {
    return gulp.src('src/app.js')
      .pipe(browserify({
        debug: true
      }))
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('bin/js'));
  }
});

/**
 * markup
 **/

gulp.task('markup', ['markup-compress']);

gulp.task('markup-compress', function () {

  if (util.env.production) {
    return gulp.src('src/*.html')
      .pipe(minifyHTML({
        comments: false
      }))
      .pipe(gulp.dest('bin/'));
  } else {
    return gulp.src('src/**/*.html')
      .pipe(gulp.dest('bin/'));
  }
});

gulp.task('data', function () {
  return gulp.src('src/*.json')
    .pipe(gulp.dest('bin'));
});

gulp.task('bump', function () {

  var opts = {
    type: "patch"
  };
  if (util.env.type === 'major') {
    opts.type = "major";
  } else if (util.env.type === 'minor') {
    opts.type = "minor";
  }

  return gulp.src('package.json')
    .pipe(bump(opts))
    .pipe(gulp.dest('./'));
});

gulp.task('compile', ['scripts', 'markup', 'data']);

gulp.task('patch', ['compile', 'bump']);

gulp.task('default', ['compile']);
