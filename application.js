$(document).ready(function() {
	$(".hidden").hide();
	$(".hidden").click(function() {
		console.log(dir);
		$(this).show();
	})
})