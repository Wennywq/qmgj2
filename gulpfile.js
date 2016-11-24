var gulp = require('gulp');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var rev = require('gulp-rev');
var inject = require('gulp-inject');


// 合并多个less
gulp.task('less',function(){
 return	gulp.src(['view/global.less','view/*.less'])
	.pipe( less() )
	.pipe( cleanCss() )
	.pipe( 
		autoprefixer({
            browsers: ['last 20 versions'],
            cascade: true
		}))
	.pipe( concat('app.min.css') )
	.pipe( gulp.dest('dest/') );
});

// 压缩js
var uglify = require('gulp-uglify');
gulp.task('js',function(){
return  gulp.src(['js/indexpage.js','controller/*Controller.js'])
   .pipe( concat('app.min.js') )
   .pipe( uglify() )
   .pipe( gulp.dest('dest/') );
});


gulp.task('localhost', function () {
  connect.server({
    // root: 'dest/',  静态资源目录
    port: 8081
  });
});

gulp.task('mywatch',function(){
     gulp.watch(['view/*.less'],['less']);
     gulp.watch(['app.js','*Controller.js'],['js']);

});
gulp.task('default',['mywatch','localhost']);



// md5加密  3步
gulp.task('rev',function () {
    return  gulp.src(['app.min.css'])
      .pipe(rev())
      .pipe( gulp.dest('') )
      .pipe( rev.manifest() )
      .pipe( gulp.dest('') );
});

// 把加密好的资源引入
gulp.task('inject',function(){
  return gulp.src('indexpage.html')
   .pipe( inject(gulp.src( ['app-*.min.css'] )) )
   .pipe( gulp.dest('') );
});

// 删除没用的文件
gulp.task('clean',function(){
  return gulp.src('app-*.min.*')
   .pipe( clean() );
});


// 保证顺序
var sequence = require('gulp-sequence');
gulp.task('build',function(cb){
  return  sequence('clean','rev','inject',cb);
});
