$(document).ready(function(){
    
    // esconder 
    var light = $(".fondo, .lightbox");
    light.hide();

    //mostrar
    $("#boton").click(function(){
        light.fadeIn();        
    });
    
    // ocultar
    $("#cruz, .fondo").click(function(){
        light.fadeOut();        
    });
    
    //centrado de modal
    var ventana_ancho = $(window).width();
    var ventana_alto = $(window).height();
    
    var lightbox_ancho = $(".lightbox").width();
    var lightbox_alto = $(".lightbox").height();
    
    var ancho_general = (ventana_ancho-lightbox_ancho)/2;

    var alto_general = (ventana_alto-lightbox_alto)/2;
    console.log (alto_general);
    
    $(".lightbox").css("top", alto_general);
    $(".lightbox").css("left", ancho_general);
    
    
    
});