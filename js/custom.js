
$(document).ready(function() {

	// fullpage plugin	

	$('#fullpage').fullpage({
		anchors:['1th', '2th', '3th', '4th', '5th', '6th', '7th', '8th' ],
		menu: '#js-menu'
	});

	// wow plugin initialize
	new WOW().init();
});
