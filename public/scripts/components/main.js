(function(){
	let $main = $("#main");

	function setMainMinHeight(){
		let remainingHeight = $(window).height() - $("body").outerHeight();
		$main.css("min-height", $main.outerHeight() + remainingHeight);
	}

	setMainMinHeight();

	$(window).on("resize", setMainMinHeight);
})();
