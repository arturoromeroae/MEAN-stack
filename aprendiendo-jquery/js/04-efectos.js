$(document).ready(function () {

    $('#show').hide();

    $('#show').click(function () {
        $(this).hide();
        $('#hidden').show();
        // $('#caja').show('slow');  mostrar
        // $('#caja').fadeIn('slow');  mostrar con efecto
        // $('#caja').slideDown('slow');  mostrar con efecto
        $('#caja').fadeTo('slow', 1);  // mostrar 1
    });

    $('#hidden').click(function () {
        $(this).hide();
        $('#show').show();
        // $('#caja').hide('slow');  ocultar
        // $('#caja').fadeOut('slow');  ocultar con efecto
        // $('#caja').slideUp('slow');  ocultar con efecto
        $('#caja').fadeTo('slow', 0); // ocultar 0
    });

    $('#allinone').click(function () {
        $('#caja').slideToggle('fast');
    });
});