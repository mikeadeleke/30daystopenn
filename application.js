$(document).ready(function() {
	$(".hidden").hide();
	$(".click").click(function(event) {
		$(this).next().toggle();
	});
})




