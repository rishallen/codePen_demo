const gulp = require('gulp'),
 connect = require('gulp-connect'),
 concat = require('gulp-concat'),
 sass = require('gulp-sass'),
 del = require('del'),
 uglify = require('gulp-uglify'),
 cleanCSS = require('gulp-clean-css'),
 imageMin = require('gulp-imagemin'),
 strip = require('gulp-strip-comments'),
 paths = { // sources
  neither:['*.html','images'],
  styles:['src/css/**/*.scss','css/*.scss'],
  styleSheet:['src/css/main.scss'],
  scripts:['src/js/**/*.js'],
  images:['src/images/**/*.*']
 },
 deps = {
  js:['src/js/vendor/picturefill.js/']
 };
var flags = require('yargs').argv;

gulp.task('start',['clean','build','serve','watch']);
gulp.task('watch',['watch:styles','watch:scripts','watch:neither']);
gulp.task('build',['build:styles','build:scripts','build:scripts:deps','copy:images','copy:html']);

gulp.task('clean',function(){
  if(flags.prod){
    del.sync(['dist/css/*', 'dist/js/*']);
 } else {
  del.sync(['build/css/*', 'build/js/*']);
 }
})
gulp.task('build:styles',function(){
 var dest = flags.prod?'dist/css':'build/css';
 var task = gulp.src(paths.styleSheet)
 .pipe(sass({includePaths: require('node-neat').includePaths}).on('error', sass.logError));
  if(flags.prod){
  task = task.pipe(cleanCSS())
  .pipe(concat('main.min.css'));
 }
 task = task.pipe(gulp.dest(dest))
 .pipe(connect.reload());
 return task;
});

gulp.task('build:scripts',function(){
 var dest = flags.prod?'dist/js':'build/js';
 var name = flags.prod?'scripts.min.js':'scripts.js';
 var task = gulp.src(paths.scripts)
 .pipe(concat(name,{newline:''}));
 if(flags.prod){
  task = task.pipe(strip())
 .pipe(uglify({mangle:true}));
 }
 task = task.pipe(gulp.dest(dest))
 .pipe(connect.reload());
 return task;
})

gulp.task('build:scripts:deps',function(){
 del.sync(['js/deps.min.js']);
 var dest = flags.prod?'dist/js':'build/js';
 var task = gulp.src(deps.js)
 .pipe(concat('deps.min.js',{newline:''}))
 .pipe(gulp.dest(dest))
 .pipe(connect.reload());
 return task;
});

gulp.task('copy:images',function(){
 if(flags.prod){
  var task = gulp.src(paths.images)
  .pipe(imageMin())
  .pipe(gulp.dest('dist/assets'));
  return task;
 }
});

gulp.task('copy:html',function(){
 if(flags.prod){
  var task = gulp.src(paths.neither[0])
  .pipe(strip())
  .pipe(gulp.dest('dist'));
  return task;
 }
})

gulp.task('reload',function(){
 return gulp.src(paths.neither)
 .pipe(connect.reload());
});

gulp.task('serve', function(){
 var base = flags.prod?'dist':'';
 var fallback = flags.prod?'dist/index.html':'index.html';
 connect.server({
  root:base,
  port:'3030',
  livereload:true,
  fallback:fallback
 })
});

gulp.task('watch:styles', function(){
 gulp.watch(paths.styles, ['build:styles'])
});

gulp.task('watch:scripts', function(){
 gulp.watch(paths.scripts, ['build:scripts'])
});

gulp.task('watch:neither', function(){
 gulp.watch(paths.neither, ['reload'])
});
