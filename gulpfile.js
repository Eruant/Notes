/**
 * gulpfile
 *
 * Tasks to make development easier
 *
 **/

var gulp = require('gulp'),
		jshint = require('gulp-jshint'),
		jasmine = require('gulp-jasmine'),
		minifyHTML = require('gulp-minify-html');

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
	return gulp.src('src/html/*.html')
		.pipe(minifyHTML({
			comments: false
		}))
		.pipe(gulp.dest('bin/'));
});

gulp.task('compile', ['scripts', 'markup']);

gulp.task('default', ['compile']);
