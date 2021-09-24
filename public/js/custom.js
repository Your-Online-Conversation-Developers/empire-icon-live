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

    jQuery('.large-view').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside:true,
		image: {
			verticalFit: false
		},
        gallery: {
            enabled: true,
        },			
		removalDelay: 500, //delay removal by X to allow out-animation
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.		
	});
	
});

