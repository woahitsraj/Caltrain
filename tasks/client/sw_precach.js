import gulp from 'gulp';

gulp.task('generate-service-worker', function(callback) {
	var path = require('path');
	var swPrecache = require('sw-precache');
	var rootDir = 'client/dev';

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