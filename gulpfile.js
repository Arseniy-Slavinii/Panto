const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const concat = require('gulp-concat');

function buildStyles() {
  console.log('Starting buildStyles task...');
  return gulp.src('./src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
    .on('end', () => console.log('buildStyles task completed.'));
}

function buildScripts() {
  console.log('Starting buildScripts task...');
  return gulp.src('./src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'))
    .on('end', () => console.log('buildScripts task completed.'));
}

exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;

exports.watch = function () {
  console.log('Starting watch task...');
  gulp.watch('./src/sass/**/*.scss', buildStyles);
  gulp.watch('./src/js/**/*.js', buildScripts);
};


exports.default = gulp.series(buildStyles, buildScripts);
