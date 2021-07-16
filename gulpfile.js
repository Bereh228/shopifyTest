const gulp = require('gulp');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

var paths = {
   'js_src': './scripts/**/*.js',
   'js_dest': './assets/',
   'scss_main': './styles/custom.scss',
   'scss_src': './styles/**/*.scss',
   'scss_dest': './assets/',
   'asset_src': './src/assets/**/*.*',
   'asset_dest': './dist/',
};

function handle_error(err){
   console.log(err.toString());
   this.emit('end');
}

gulp.task('js', function () {
  return gulp.src(paths.js_src)
      .pipe(babel({
          presets: ['es2015']
      }))
      .pipe(concat('custom.js'))
      .pipe(gulp.dest(paths.js_dest))
      .pipe(rename('custom.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.js_dest));
});

gulp.task('scss', function() {
   return gulp.src(paths.scss_main)
   .pipe(sourcemaps.init())
   .pipe(sass())
   .on('error', handle_error)
   .pipe(autoprefixer({ cascade : false }))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest(paths.scss_dest))
});

gulp.task('assets', function() {
   return gulp.src(paths.asset_src, {base: './src/'})
   .pipe(gulp.dest(paths.asset_dest));
 });

gulp.task('watch', function() {
   gulp.watch(paths.js_src, gulp.series('js'));
   gulp.watch(paths.scss_src, gulp.series('scss'));
   gulp.watch(paths.asset_src, gulp.series('assets'));
});

gulp.task('build', gulp.series('scss', 'js'));
gulp.task('default', gulp.series('build', 'watch'));