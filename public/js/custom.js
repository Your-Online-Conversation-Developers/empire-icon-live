"use strict";

/*global jQuery, $*/
jQuery(function(){
	
	// navigation collapse
	jQuery('.navbar-collapse').on("click", 'li', function() {
        jQuery('.navbar-collapse').collapse('hide');
    });

    //magnificPopup	Video
	jQuery('.embaded-popup').magnificPopup({
		type: 'iframe',
		removalDelay: 160,
		preloader: true,
		fixedContentPos: false,
	});
	
});

