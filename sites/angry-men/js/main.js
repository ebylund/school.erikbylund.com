$(document).ready(function(){
	//console.log("im working");
	$('a').each(function() {
		console.log('im an A tag');
		if ($(this).prop('href') == window.location.href) {
			$(this).addClass('current');
		}
	});
});
