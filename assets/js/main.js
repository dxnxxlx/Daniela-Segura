$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['portada', 'portafolio', 'sobre', 'habilidades']

    });
	$('.variable-width').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});

    $(".celular").hover(function(){
    	$(this).find(":last-child").addClass("hidden"); 
        }, function(){
        $(this).find(":last-child").removeClass("hidden");
    });

});

