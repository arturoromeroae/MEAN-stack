$(document).ready(function () {

    // mover elemento por la pagina
    $('.elemento').draggable();

    // redimensionar
    $('.elemento').resizable();

    // seleccionar y ordenar elementos
    // $('.lista-seleccionable').selectable(); // selecciona
    $('.lista-seleccionable').sortable({
        update: function(event, ui) {
            console.log('ha cambiado la lista');
        }
    }); // ordena

    // drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function () {
            console.log('soltaste algo dentro del area')
        }
    });

    // efectos
    $('#mostrar').click(function () { 
        // $('.caja-efectos').fadeToggle();
        // $('.caja-efectos').toggle('explode');
        // $('.caja-efectos').toggle('blind');
        // $('.caja-efectos').toggle('slide');
        // $('.caja-efectos').toggle('drop');
        // $('.caja-efectos').toggle('fold');
        // $('.caja-efectos').toggle('puff');
        // $('.caja-efectos').toggle('scale');
        $('.caja-efectos').toggle('shake', /* 'slow'*/ 4000);
    });

    // tooltip
    $(document).tooltip();

    // dialog
    $('#lanzar-popup').click(function () {
        $('#popup').dialog();
    });

    // datepicker
    $('#calendario').datepicker();

    // tabs
    $('#pestanas').tabs();
});