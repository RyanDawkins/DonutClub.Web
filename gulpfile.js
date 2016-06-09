var gulp = require('gulp');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var $ = require('gulp-load-plugins')();
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// Lint JavaScript
gulp.task('jshint', function () {
	return gulp.src('./app/**/*.js')
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['build'], function () {
});

gulp.task('build', ['clean', 'jshint', 'html'], function(){

});

gulp.task('html', function () {
    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});
