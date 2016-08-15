var express = require("express"),
	router = express.Router(),
	fs = require("fs");

var pages = fs.readdirSync("./app/views/pages/").map(function(x){ return x.split(".")[0]; });

var patternFiles = fs.readdirSync("./app/views/partials/");
var patternContents = [];
patternFiles.forEach(function(file){
	patternContents.push({
		filename: file.split(".")[0],
		contents: fs.readFileSync("./app/views/partials/" + file, 'utf8')
	});
});

var config = JSON.parse(fs.readFileSync("./package.json"));

module.exports = function(app) {
	app.use("/", router);
};

router.get("/", function(req, res, next) {
	res.render("index", {
		title: config.name,
		description: config.description,
		layout: "qubase",
		pages: pages
	});
});

router.get("/patterns", function(req, res, next) {
	res.render("patterns", {
		title: "Pattern Library",
		layout: "qubase",
		patterns: patternContents
	});
});

pages.forEach(function(page){
	router.get("/"+page, function(req, res, next){
		res.render("pages/" + page, {
			title: page,
			layout: "main"
		});
	});
});
