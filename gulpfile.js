let gulp = require("gulp");
let nodemon = require("gulp-nodemon");
let plumber = require("gulp-plumber");
let sass = require("gulp-sass");
let sassGlob = require("gulp-sass-glob");
let cssnano = require("gulp-cssnano");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let rename = require("gulp-rename");
let sourcemaps = require("gulp-sourcemaps");
let jshint = require("gulp-jshint");
let babel = require("gulp-babel");
var browserSync = require('browser-sync').create();

gulp.task("sass", function () {
	return gulp.src(["./public/styles/styles.scss"])
	.pipe(sourcemaps.init())
	.pipe(plumber())
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
		"./public/scripts/util.js",
		"./public/scripts/components/**/*.js",
		"./public/scripts/vendor/modernizr-custom.js",
		"./public/scripts/vendor/flex.js"
	])
	.pipe(sourcemaps.init())
	.pipe(plumber())
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
	gulp.watch("./public/styles/**/*.scss", ["sass"]);
	gulp.watch("./public/scripts/**/*.js", ["scripts"]);
	gulp.watch("./app/views/**/*").on("change", browserSync.reload);
});

gulp.task("browser-sync", ["nodemon"], function() {
    browserSync.init({
        proxy: "http://localhost:3001",
        port: 7000
    });
});

gulp.task("nodemon", function (cb) {
	var started = false;
	return nodemon({
		script: "app.js"
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
