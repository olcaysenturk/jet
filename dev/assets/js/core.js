$(document).ready(function(){
	hoverAnimated(); 
	hamburgerClick();
	gMap();
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

//MAP
var gMap = function(){
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