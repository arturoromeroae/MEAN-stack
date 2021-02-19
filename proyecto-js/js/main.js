$(document).ready(function () {

    if (window.location.href.indexOf('index') > -1) {
        // slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1500,
            responsive: true
        });
    }

    if (window.location.href.indexOf('index') > -1) {
        // posts
        var posts = [
            {
                title: 'prueba de titulo',
                date: 'Publicado: ' + moment().format("Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus reprehenderit dolorem nisi dolores, sit doloribus at doloremque ducimus nemo non dolore, laborum suscipit earum provident commodi voluptatum placeat eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus reprehenderit dolorem nisi dolores, sit doloribus at doloremque ducimus nemo non dolore, laborum suscipit earum provident commodi voluptatum placeat eos?'
            },
            {
                title: 'prueba de titulo 2',
                date: 'Publicado: ' + moment().format("Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus reprehenderit dolorem nisi dolores, sit doloribus at doloremque ducimus nemo non dolore, laborum suscipit earum provident commodi voluptatum placeat eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus reprehenderit dolorem nisi dolores, sit doloribus at doloremque ducimus nemo non dolore, laborum suscipit earum provident commodi voluptatum placeat eos?'
            },
            {
                title: 'prueba de titulo 3',
                date: 'Publicado: ' + moment().format("Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus reprehenderit dolorem nisi dolores, sit doloribus at doloremque ducimus nemo non dolore, laborum suscipit earum provident commodi voluptatum placeat eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus reprehenderit dolorem nisi dolores, sit doloribus at doloremque ducimus nemo non dolore, laborum suscipit earum provident commodi voluptatum placeat eos?'
            },
            {
                title: 'prueba de titulo 4',
                date: 'Publicado: ' + moment().format("Do MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus reprehenderit dolorem nisi dolores, sit doloribus at doloremque ducimus nemo non dolore, laborum suscipit earum provident commodi voluptatum placeat eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus reprehenderit dolorem nisi dolores, sit doloribus at doloremque ducimus nemo non dolore, laborum suscipit earum provident commodi voluptatum placeat eos?'
            },
        ];

        posts.forEach((item, index) =>{
            var post = `
            <article class="column">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>
            `;

            $('#posts').append(post);
        });
    
    }

    // selector de tema
    var theme = $("#theme");
    var buttons = $("#button-switch");
    var black = 'css/black.css';
    var white = 'css/white.css';
    
    // guardar tema del usuarion en localstorage
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("tema1", black);
        localStorage.setItem("tema2", white);
        var tema1 = localStorage.getItem("tema1");
        var tema2 = localStorage.getItem("tema2");

        buttons.click(function () { 
            if (this.checked) {
                theme.attr("href", tema1);
                localStorage.setItem("bc", true);
                localStorage.removeItem('bu');
            }else{
                theme.attr("href", tema2);
                localStorage.setItem("bu", false);
                localStorage.removeItem('bc');
            }
        });

        if (localStorage.getItem("bc")) {
            theme.attr("href", tema1);
            buttons.prop('checked', true);
        }else{
            theme.attr("href", tema2);
        }
    };
    
    // scroll arriba de la web
    $('.upper').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 450);

        return false;
    });

    $(window).scroll(function () {
       if ($(this).scrollTop() > 0) {
           $('.upper').slideDown(300);
       }else{
           $('.upper').slideUp(300);
       }
    });
    
    // formulario login
    $('#login form').submit(function () {
        var form_name = $('#form_name').val();

        localStorage.setItem('form_name', form_name);
    });

    var form_name = localStorage.getItem('form_name');
    if (form_name != null && form_name != 'undefined') {
        var about_parrafo = $("#about p");

        about_parrafo.html('<strong style="text-align: center;">Bienvenido, ' + form_name + '</strong>');
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $('#login form').hide();

        $('#logout').click(function () {
            localStorage.removeItem('form_name');
            location.reload();
        });
    }

    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

});