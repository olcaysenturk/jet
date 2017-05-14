$(document).ready(function(){
	hoverAnimated(); 
});

$(window).on('load', function(){
    
});

$(window).on('resize', function(){

});

//HOVER ANIMETED
var hoverAnimated = function(){
	if ($(".arrow").length > 0) {
		$(".arrow").click(function() {
		    $('html, body').animate({
		        scrollTop: $(".h-com").offset().top - 40
		    }, 800);
		});
	}
		
}
