$(document).ready(function() {
    
    // selector de id
    $("#amarillo").css("background", "yellow")
                  .css("color", "black");

    $("#rojo").css("background", "red")
              .css("color", "white");

    $("#azul").css("background", "blue")
              .css("color", "white");

    // selectores de clases
    var mi_clase = $('.zebra');
    mi_clase.css("padding", "5px");

    var my_border = $('.sin_borde');
    my_border.click(function() {
        console.log("click");
        $(this).addClass('zebra');
        
    });

    // selectores de etiqueta
    
    var parrafos = $('p').css('cursor', 'pointer');

    $('p').mouseover(function () {
        var esto = $(this);
        esto.addClass('over');
    });

    $('p').mouseout(function () { 
        var esto = $(this);
        esto.removeClass('over');
    });

    parrafos.click(function() {
        var esto = $(this);
        if (!esto.hasClass('grande')){
            esto.addClass('grande');   
        }else{
            esto.removeClass('grande');
        }
    });

    // selectores de atributos
    $('[title = "google"]').css('background', '#ccc');
    $('[title = "facebook"]').css('background', 'blue');

    // otros
    // $('p, a').addClass('margen-sup');

    var busqueda = $("#caja").find('.resaltado');
    console.log(busqueda);

});