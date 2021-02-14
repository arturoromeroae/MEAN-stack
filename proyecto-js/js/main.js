$(document).ready(function () {

    // slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1500,
        responsive: true
    });

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
});