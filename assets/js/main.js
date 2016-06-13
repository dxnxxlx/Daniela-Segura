$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['portada', 'portafolio', 'sobre', 'habilidades'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Portafolio', 'Sobre mí', 'Habilidades', 'Contacto'],
		//showActiveTooltip: true,
		//responsiveWidth: 1100
		keyboardScrolling: true


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

