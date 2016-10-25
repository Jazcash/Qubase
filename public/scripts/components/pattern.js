(function(){
	$(".pattern__code-btn").on("click", function(){
		$(this).parent().next(".pattern__code").toggle();
		$(this).text();
	});
})();
