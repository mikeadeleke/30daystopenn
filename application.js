$(document).ready(function() {
	$(".hidden").hide();
	$(".click").click(function(event) {
		$(".click").next().toggleClass("hidden");
	});
})




