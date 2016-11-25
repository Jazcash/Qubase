(function(){
	$(".qubase-pattern__code-btn").on("click", function(){
		$(this).parent().next(".qubase-pattern__code").toggle();
		$(this).text();
	});
})();
