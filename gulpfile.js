/**
 * gulpfile
 *
 * Tasks to make development easier
 *
 **/

var gulp = require('gulp'),
		util = require('gulp-util'),
		jshint = require('gulp-jshint'),
		jasmine = require('gulp-jasmine'),
		concat = require('gulp-concat'),
		minifyHTML = require('gulp-minify-html'),
		bump = require('gulp-bump');

/**
 * scripts
 **/
gulp.task('scripts', ['scripts-validate', 'scripts-test']);

gulp.task('scripts-validate', function () {
	return gulp.src('src/js/**/*.js')
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'));
});

gulp.task('scripts-test', function () {
	return gulp.src('test/*.js')
		.pipe(jasmine());
});

/**
 * markup
 **/

gulp.task('markup', ['markup-compress']);

gulp.task('markup-compress', function () {

	if (util.env.production) {
		return gulp.src('src/html/*.html')
			.pipe(minifyHTML({
				comments: false
			}))
			.pipe(gulp.dest('bin/'));
	} else {
		return gulp.src('src/html/*.html')
			.pipe(gulp.dest('bin/'));
	}
});

gulp.task('bump', function () {

	opts = {
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

gulp.task('compile', ['scripts', 'markup']);

gulp.task('patch', ['compile', 'bump']);

gulp.task('default', ['compile']);
