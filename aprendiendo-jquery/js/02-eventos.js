$(document).ready(function () {
    
    // mouseover y mouseout
    var caja = $('#caja2');

    // caja.mouseover(function () {
    //     $(this).css('background', 'tomato');     
    // });

    // caja.mouseout(function () { 
    //     $(this).css('background', 'yellow');
    // });

    function cambiaAmarillo() { 
        $(this).css('background', 'yellow');
    }

    function cambiaRojo() { 
        $(this).css('background', 'tomato');
    }

    // caja.hover(function () {
    //         // over
    //         $(this).css('background', 'tomato');            
    //     }, function () {
    //         // out
    //         $(this).css('background', 'yellow');
    //     }
    // );
    
    // otra manera de hacer hover
    caja.hover(cambiaRojo, cambiaAmarillo);
});