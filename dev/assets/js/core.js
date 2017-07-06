$(document).ready(function(){
	hoverAnimated(); 
	gMap();
	formLabel();
	isotope();
	
});

$(window).on('load', function(){
    hamburgerClick();
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

	$("#nav-ico").on("click", function(){
		$("#nav-ico").toggleClass('open');
		$(".m-box").slideToggle();
		$("body").toggleClass('noscroll');
	});
}

//MAP
var gMap = function(){
	if ($("#map").length > 0) {
		function initMap() {
	        var location = new google.maps.LatLng(41.110251, 29.019240);
	        var mapCanvas = document.getElementById('map');
	        var mapOptions = {
	            center: location,
	            zoom: 16,
	            panControl: false,
	            mapTypeId: google.maps.MapTypeId.ROADMAP
	        }
	        var map = new google.maps.Map(mapCanvas, mapOptions);
	    }
	    google.maps.event.addDomListener(window, 'load', initMap);
	}
}

//LABEL
var formLabel = function(){
	if ($(".form-group label").length > 0) {
		$('.form-group input').focus(function () {
		    $(this).parents(".form-group").find("label").addClass("active");
		});
		$('.form-group input').blur(function () {
		    if($(this).val() == '') {
		    $(this).parents(".form-group").find("label").removeAttr('class');
		    }
		});
	}
}

//LABEL
var isotope = function(){
	if ($(".grid").length > 0) {
		$(".grid").isotope({
	        itemSelector: '.item',
	        layoutMode: 'fitRows',
	    });

		$('.filter li').click(function(){ 
	        
	      $(".filter li").removeClass("active");
	      $(this).addClass("active");        

	        var selector = $(this).attr('data-filter'); 
	        $(".grid").isotope({ 
	            filter: selector, 
	            animationOptions: { 
	                duration: 50, 
	                easing: 'linear', 
	                queue: false, 
	            } 
	        }); 
	      return false; 
	    });
	}
}
