/*jshint loopfunc: true */

$(function(){
	"use strict";

	$(".tooltip").each((i, el) => {
		$(el).on("touchstart", () => $(el).toggleClass("show"));
	});
});
