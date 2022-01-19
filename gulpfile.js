const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
                baseDir: './src/'
        }
    });
});

gulp.task('sass', function() {
    return gulp.src('src/assets/styles/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/assets/styles/css/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch-styles', function() {
    gulp.watch('src/assets/styles/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('watch-html', function() {
    gulp.watch('src/**/*.html', browserSync.reload);
});

gulp.task('dev', gulp.series('sass', gulp.parallel('browser-sync', 'watch-styles', 'watch-html')));




gulp.task('build-fonts', function() {
    return gulp.src('src/assets/fonts/**/*')
    .pipe(gulp.dest('dist/assets/fonts/'));
});

gulp.task('build-img', function() {
    return gulp.src('src/assets/img/**/**')
    .pipe(gulp.dest('dist/assets/img/'));
});

gulp.task('build-scripts', function() {
    return gulp.src('src/assets/scripts/**/*.js')
    .pipe(gulp.dest('dist/assets/scripts/'));
});

gulp.task('build-styles', function() {
    return gulp.src('src/assets/styles/CSS/**/*.css')
    .pipe(gulp.dest('dist/assets/styles/CSS/'));
});

gulp.task('build-template', function() {
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', gulp.series('build-fonts', 'build-img', 'build-scripts', 'build-styles', 'build-template'));