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

    // click, doble click
    caja.click(function () { 
        $(this).css('border', '12px solid black');        
    });

    caja.dblclick(function () { 
        $(this).css('border', '2px solid black');
    });

    // focus y blur
    var datos = $('#datos');

    $('#nombre').focus(function() {
        $(this).css('border', '2px solid green');
    });

    $('#nombre').blur(function() {
        $(this).css('border', '1px solid #ccc');
        
        datos.text($(this).val()).show();
    });

    // mousedown y mouseup
    datos.mousedown(function () { 
        $(this).css('border-color', 'red');
    });

    datos.mouseup(function () { 
        $(this).css('border-color', 'black');
    });

    // mouse move
    $(document).mousemove(function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        $('body').css('cursor', 'none');
        $('#sigueme').css('left', e.clientX)
                     .css('top', e.clientY)
    });
});