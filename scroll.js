$(document).ready(function($){	
	function swapImage() {
		var currentImage = $(this).attr("src"); //img/profile-1.jpg
		var hoverImage = $(this).clone().data("hoverimg"); //img/profile-2.jpg
		$(this).attr({ src: hoverImage, 'data-hoverimg': currentImage });
	}
	
	
	$(document).on("click", "nav li a, .down-arrow, .up-arrow", function(e){
		e.preventDefault();
		
		//This should set the variable "page" as either #home, #about, #work, or #contact:
		if( $(this).attr("href") ) {
			var page = $(this).attr("href");
		}
		else {
			var page = $(this).closest("a").attr("href");
		}
			
		//For soft-scrolling:		
		if( $("header").css("display") === "none" ) {
			$("html, body").animate({ scrollTop: parseInt( $(page).position().top )}, 1000);  //Soft-scroll for mobile devices.
		}
		else {
			$("html, body").animate({ scrollTop: parseInt( $(page).position().top ) - 50 }, 1000);  //Soft-scroll for Desktops. (Accounts for fixed menu at the top.)
		}	
	});
	
	$(".profile-image").bind("mouseenter mouseleave", swapImage); 
});


