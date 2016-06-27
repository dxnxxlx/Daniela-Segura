$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['portada', 'portafolio', 'sobre', 'habilidades', 'contacto'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Portafolio', 'Sobre mí', 'Habilidades', 'Contáctame'],
		//showActiveTooltip: true,
		//responsiveWidth: 1100
		keyboardScrolling: true,
		afterLoad: function() {
			var seccion = window.location.hash;
			if (seccion == '#sobre') {
				$("#fp-nav ul li a span").css({ background: "black"});
				$("#fp-nav ul li a.active span").css({ background: "#FFF"});
			} else if (seccion == '#habilidades'){
				$("#fp-nav ul li a span").css({ background: "#FF5539"});
				$("#fp-nav ul li a.active span").css({ background: "black"});
			}else {
				$("#fp-nav ul li a span").css({ background: "#FF5539"});
				$("#fp-nav ul li a.active span").css({ background: "#FFF"});
			}
		}

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

