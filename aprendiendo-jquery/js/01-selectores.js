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
    
});