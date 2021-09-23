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
		callbacks: {
		beforeOpen: function() {
			  // just a hack that adds mfp-anim class to markup 
			  this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			  this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});
	
	jQuery('.large-view').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside:true,
		image: {
			verticalFit: false
		},			
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
		  // just a hack that adds mfp-anim class to markup 
			this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.		
	});	
	
});

