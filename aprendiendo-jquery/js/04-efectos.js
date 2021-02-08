$(document).ready(function () {

    var caja = $('#caja');

    $('#show').hide();

    $('#show').click(function () {
        $(this).hide();
        $('#hidden').show();
        // $('#caja').show('slow');  mostrar
        // $('#caja').fadeIn('slow');  mostrar con efecto
        // $('#caja').slideDown('slow');  mostrar con efecto
        caja.fadeTo('slow', 1);  // mostrar 1
    });

    $('#hidden').click(function () {
        $(this).hide();
        $('#show').show();
        // $('#caja').hide('slow');  ocultar
        // $('#caja').fadeOut('slow');  ocultar con efecto
        //caja.fadeTo('slow', 0); // ocultar 0
        $('#caja').slideUp('slow', function() {
            console.log('cartel ocultado'); // se ejecuta cuando termina la animacion
        });  // ocultar con efecto
    });

    $('#allinone').click(function () {
        caja.slideToggle('fast');
    });

    $('#animar').click(function () {
        caja.animate({
                        marginLeft: '500px',
                        fontSize: '40px',
                        height: '100px'
                        }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '150px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                marginTop: '0px',
                borderRadius: '100px'
            }, 'slow')
            .animate({
                marginLeft: '500px',
                fontSize: '40px',
                height: '100px'
                }, 'slow')
    });
});