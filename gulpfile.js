/*
* Dependencias
*/
var gulp = require('gulp');
var exec = require('child_process').exec;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var __dir = '../';
var dir_back = './angular2boot_back';
var dir_front = './angular2boot_front';

//install frontend dependencies
gulp.task('npm_install_front', function(cb){
	process.chdir(dir_front);
	console.log(process.cwd());
	exec('npm install', function(err, stdout, stderr){
	    console.log(stdout);
	    console.log(stderr);
	    cb(err);
	  });
});

//clean and install backend dependecies
gulp.task('mvn_clean_install', function(cb){
  process.chdir(dir_back);
  console.log(process.cwd());
  exec('mvn clean install', function(err, stdout, stderr){
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

//run rest backend
gulp.task('run_back', function(cb){
  process.chdir(__dir + dir_back);
  console.log(process.cwd());
  exec('mvn spring-boot:run', function(err, stdout, stderr){
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

//run ng serve
gulp.task('run_front', function(cb){
  process.chdir(dir_front);
  console.log(process.cwd());
  exec('ng serve', {maxBuffer: 1024 * 500}, function(err, stdout, stderr){
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('default', ['run_front','run_back']);