var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");
var cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var jshint = require("gulp-jshint");
var babel = require("gulp-babel");
var browserSync = require('browser-sync').create();

gulp.task("sass", function () {
	return gulp.src(["./public/styles/styles.scss"])
	.pipe(sourcemaps.init())
	.pipe(plumber({errorHandler: function (err) {
		console.log(err);
		this.emit('end');
	}}))
	.pipe(sassGlob())
	.pipe(sass())
	.pipe(cssnano({
		autoprefixer: {
			browsers: ["last 50 versions", "ie >= 9"],
			add: true,
			cascade: false
		}
	}))
	.pipe(rename({
		suffix: ".min"
	}))
	.pipe(sourcemaps.write("../maps"))
	.pipe(gulp.dest("./public/build"))
	.pipe(browserSync.stream());
});

gulp.task("scripts", function(){
	return gulp.src([
		"./public/scripts/vendor/**/*.js",
		"./public/scripts/util.js",
		"./public/scripts/animation/**/*.js",
		"./public/scripts/components/**/*.js"
	])
	.pipe(sourcemaps.init())
	.pipe(plumber({errorHandler: function (err) {
		console.log(err);
		this.emit('end');
	}}))
	.pipe(jshint({
		browser: true,
		devel: true,
		esversion: 6,
		loopfunc: true
	}))
	.pipe(babel({
		presets: ["es2015"]
	}))
	.pipe(jshint.reporter("default"))
	.pipe(concat("script.min.js"))
	.pipe(uglify())
	.pipe(sourcemaps.write("../maps"))
	.pipe(gulp.dest("./public/build"))
	.pipe(browserSync.stream());
});

gulp.task("watch", function() {
	gulp.watch("public/styles/**/*.scss", ["sass"]);
	gulp.watch("public/scripts/**/*.js", ["scripts"]);
	gulp.watch("app/views/**/*").on("change", browserSync.reload);
});

gulp.task("browser-sync", ["nodemon"], function() {
	browserSync.init({
		proxy: "http://localhost:3001",
		port: 7000,
		notify: false
	});
});

gulp.task("nodemon", function (cb) {
	var started = false;
	return nodemon({
		script: "app.js",
		ext: "js hbs",
		ignore: ["public/"]
	}).on('start', function () {
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task("default", [
	"sass",
	"scripts",
	"browser-sync",
	"watch"
]);
