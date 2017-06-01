$(document).ready(function(){
	hoverAnimated(); 
	hamburgerClick();
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

//HAMBURGER
var hamburgerClick = function(){
	$("#nav-ico").click(function(){
		$("#nav-ico").toggleClass('open');
		$(".m-box").slideToggle();
		$("body").toggleClass('noscroll');
	});
}
