$(document).ready(function () {

    $('#add_button')

    reloadLinks();

    $('#add_button')
                  .removeAttr('disabled')
                  .click(function () {
                //.html (incrusta html)
                //.prepend (lo añade al principio de la lista)
                //.append (agregar a la lista)
                //.before (carga antes de la lista ya existente)
        $('#menu').prepend('<li><a href="https://' + $("#add_link").val() + '"></a></li>');

        $("#add_link").val('');
        reloadLinks()
    });


    function reloadLinks() {
        $('a').each(function(indice, valor) {
            var that = $(this);
            var enlace = that.attr("href");

            that.attr('target', '_blank');

            that.text(enlace);
        });
    }
});
