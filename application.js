$(document).ready(function() {
	$(".hidden").hide();
	$(".click").click(function(event) {
		$(event.target).parent()[0].children[3].html("display", "show");
	});
})




