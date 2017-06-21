const gulp    = require('gulp'),
const connect = require('gulp-connect')
const concat = require('gulp-concat'),
const sass = require('gulp-sass'),

const paths = { // sources
styles:['src/css/**/*.scss','css/*.scss'],
styleSheet:['src/css/main.scss']
 }

gulp.task('start',['build','serve','watch']);
gulp.task('watch',['watch:styles']);
gulp.task('build',['build:styles']);

gulp.task('build:styles',function(){
var dest = 'src/css';
 var task = gulp.src(paths.styleSheet)
 .pipe(sass({includePaths: require('node-neat').includePaths}).on('error', sass.logError));
 task = task.pipe(gulp.dest(dest))
 .pipe(connect.reload());
 return task;
});

gulp.task('serve', function(){
 connect.server({
  root:'',
  port:'3030',
  livereload:true,
  fallback:"index.html"
 })
});
//
gulp.task('watch:styles', function(){
 gulp.watch(paths.styles, ['build:styles'])
});
