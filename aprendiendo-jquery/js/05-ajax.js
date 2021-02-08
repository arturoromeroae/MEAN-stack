$(document).ready(function () {
    // load
    // permite hace una peticion ajax por get e incrustarlo en el html
    // $('#datos').load("https://reqres.in");

    // GET y POST
    $.get("https://reqres.in/api/users",{page: 2}, function(response) {
        response.data.forEach((element, index) => {
            $('#datos').append('<p>' + element.first_name + ' ' + element.last_name + '</p>');
        });
    });

    $('#formulario').submit(function (e) {
        e.preventDefault();
        
        var usuario = {
            name: $('input[name = "name"]').val(),
            job: $('input[name = "job"]').val()
    
        };
    
        // $.post($(this).attr("action"), usuario, function (response) {
        //         console.log(response);
        // }).done(function () {
        //     alert('usuario registrado');
        // });

        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function () {
                console.log('enviando datos');
            },
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                console.log(response);
            },
            error: function () {
                console.log('ha ocurrido un error');
            },
            timeout: 2000
        });

        return false;
    });

});