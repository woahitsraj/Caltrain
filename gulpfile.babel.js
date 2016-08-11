'use strict';
var gulp = require('gulp');
var minifyCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var browserSync = require('browser-sync').create();
var path = require('path');
var swPrecache = require('sw-precache');
var rootDir = 'client/dev';
var shell = require('gulp-shell');

// Generate Service Worker
gulp.task('generate-service-worker', function(callback) {
	swPrecache.write(path.join(rootDir, 'service-worker.js'), {
		staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
		stripPrefix: rootDir,
		runtimeCaching: [{
			urlPattern: /^((?:.*))\/api\/stop(?:\/(?=$))?$/i,
			handler: 'networkFirst',
			options: {
				cache: {
					name: 'stop-cache'
				}
			}
		}, {
			urlPattern: /^((?:.*))\/api\/stoptime\/((?:[^\/]+?))(?:\/(?=$))?$/i,
			handler: 'networkFirst',
			options: {
				cache: {
					name: 'stoptime-cache'
				}
			}
		}]
	}, callback);
});

gulp.task('copy-config', function() {
   gulp.src('./config.js')
   .pipe(gulp.dest('./node_modules/gtfs'));
});

gulp.task('load-data', shell.task([
  'cd node_modules/gtfs && npm run download'
]));

gulp.task('init-gtfs', ['copy-config', 'load-data']);


// Minify CSS
gulp.task('minify-css', function() {
  gulp.src(rootDir + '/css/*.css')
    .pipe(gulp.dest('./dist/css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

// Minify JavaScript
gulp.task('minify-js', function() {
  gulp.src(rootDir + '/js/*.js')
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// Minify Service Worker
gulp.task('minify-sw-js', function() {
  gulp.src(rootDir + '/*.js')
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

// Minify HTML
gulp.task('minify-html', function() {
  gulp.src(rootDir + '/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist'));
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'http://localhost:3333', 
    reloadDelay: 1000,
  });
});

// Reload task
gulp.task('reload', function () {
  browserSync.reload();
});


// Default
gulp.task('default', ['minify-css', 'minify-js','minify-sw-js', 'minify-html', 'browser-sync', 'reload'], function() {

  gulp.watch([rootDir + '/*.html'], ['minify-html', 'reload']);
  gulp.watch([rootDir + '/js/*.js'], ['minify-js', 'reload']);
  gulp.watch([rootDir + '/*.js'], ['minify-sw-js', 'reload']);
  gulp.watch([rootDir + '/css/*.css'], ['minify-css', 'reload']);

});
