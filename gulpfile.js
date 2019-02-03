var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('sass', function() {
  return gulp.src('project/sass/style.scss')
    .pipe(plumber())
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefix({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('project/css/'))
    .pipe(browserSync.reload({
    	stream:true
    }))
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: 'project'
		},
		notify: false
	});
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('project/**/*.html', browserSync.reload);
  gulp.watch('project/sass/**/*.scss', ['sass']);
  gulp.watch('project/js/**/*.js', browserSync.reload);
});

gulp.task('start', ['watch']);

gulp.task('optimaze', function() {
  return gulp.src('project/css/style.css')
    .pipe(csso())
    .pipe(gulp.dest('project/mincss/'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('project/js/*.js'),
        uglify(),
        gulp.dest('project/optim/')
    ],
    cb
  );
});
