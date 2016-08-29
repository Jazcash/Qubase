let gulp = require("gulp");
let nodemon = require("gulp-nodemon");
let plumber = require("gulp-plumber");
let livereload = require("gulp-livereload");
let sass = require("gulp-sass");
let sassGlob = require("gulp-sass-glob");
let cssnano = require("gulp-cssnano");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let rename = require("gulp-rename");
let sourcemaps = require("gulp-sourcemaps");
let jshint = require("gulp-jshint");
let babel = require("gulp-babel");
let include  = require("gulp-include");

gulp.task("sass", function () {
	gulp.src(["./public/styles/styles.scss", "./public/styles/qubase.scss"])
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
	.pipe(livereload());
});

gulp.task("scripts", function(){
	gulp.src(["./public/scripts/main.js"])
	.pipe(sourcemaps.init())
	.pipe(plumber())
	.pipe(jshint({
		browser: true,
		devel: true,
		esversion: 6,
		loopfunc: true
	}))
	.pipe(include({
		extensions: "js",
		includePaths: [
			__dirname + "/public/scripts"
		]
	})).on('error', console.log)
	.pipe(babel({
		presets: ["es2015"]
	}))
	.pipe(jshint.reporter("default"))
	.pipe(concat("script.min.js"))
	.pipe(uglify())
	.pipe(sourcemaps.write("../maps"))
	.pipe(gulp.dest("./public/build"))
	.pipe(livereload());
});

gulp.task("watch", function() {
	gulp.watch("./public/styles/**/*.scss", ["sass"]);
	gulp.watch("./public/scripts/*.js", ["scripts"]);
});

gulp.task("dev", function () {
	livereload.listen({
		quiet: false
	});
	nodemon({
		script: "app.js",
		ext: "js handlebars",
		stdout: false,
		verbose: false
	}).on("readable", function () {
		this.stdout.on("data", function (chunk) {
			if(/^Express server listening on port/.test(chunk)){
				livereload.changed(__dirname);
			}
		});
		this.stdout.pipe(process.stdout);
		this.stderr.pipe(process.stderr);
	});
});

gulp.task("default", [
	"sass",
	"scripts",
	"dev",
	"watch"
]);
