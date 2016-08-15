var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src('./public/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./public/build'))
        .pipe(livereload());
});

gulp.task('scripts', function(){
    gulp.src(['./public/scripts/main.js'])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/build'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch('./public/styles/**/*.scss', ['sass']);
    gulp.watch('./public/scripts/*.js', ['scripts']);
});

gulp.task('develop', function () {
    livereload.listen();
    nodemon({
        script: 'app.js',
        ext: 'js handlebars',
        stdout: false
    }).on('readable', function () {
        this.stdout.on('data', function (chunk) {
            if(/^Express server listening on port/.test(chunk)){
                livereload.changed(__dirname);
            }
        });
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});

gulp.task('default', [
    'sass',
    'scripts',
    'develop',
    'watch'
]);
