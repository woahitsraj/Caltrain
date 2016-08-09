import gulp from 'gulp';
var shell = require('gulp-shell');


gulp.task('copy-config', function() {
   gulp.src('./config.js')
   .pipe(gulp.dest('./node_modules/gtfs'));
});

gulp.task('load-data', shell.task([
  'cd node_modules/gtfs && npm run download'
]));

gulp.task('init-gtfs', ['copy-config', 'load-data']);
