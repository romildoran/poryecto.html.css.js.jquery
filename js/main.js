$(document).ready(function () {


    //slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true,
            auto: true,
        });
    }

    //los Post
    if (window.location.href.indexOf('index') > -1) {
        var post = [
            {
                title: "El caracol",
                date: "Publicado el dia: " + moment().format("DD MMMM YYYY"),
                content: "En el vasto universo de la programación web, cada término es como un pincelazo en el lienzo digital, creando una sinfonía de código que da vida a experiencias en línea. Imagina un caracol que avanza con determinación, asimilando conocimiento mientras se desliza por las ramas del árbol del aprendizaje. En el cielo cibernético, las ideas toman vuelo como hojas impulsadas por la brisa creativa, encontrando su lugar en la red global. Cada línea de código es una expresión única, una historia narrada en lenguajes de programación. Rojo como la pasión que se invierte en cada proyecto, como el fuego que arde en los corazones de los desarrolladores mientras resuelven desafíos. Cada línea es una flecha, una flecha que apunta directamente hacia la meta, guiando al usuario a través de la interfaz, entregando respuestas y funcionalidad con precisión milimétrica. Imagina un caracol digital, una herramienta que rastrea los datos y encuentra patrones, moviéndose a través de la estructura de la información con agilidad. En el cielo virtual, las ideas flotan como hojas en la corriente, esperando ser capturadas y transformadas en soluciones interactivas. Cada línea de código es como una ramificación en un árbol de posibilidades, donde el desarrollador rojo dibuja la flecha que guiarán al usuario en su viaje digital. En este paisaje tecnológico, el caracol de la programación avanza, dejando su rastro en forma de líneas de código. El cielo de la creatividad se llena con hojas de innovación, mientras la flecha del diseño apunta a experiencias de usuario excepcionales. Así, con pasión y habilidad, se teje la tela de la web moderna, donde cada elemento encuentra su lugar en un ecosistema digital en constante evolución.",
                color: "Amarillo",
            },
            {
                title: "Explorando el Ciberespacio",
                date: "Publicado el dia: " + moment().format("DD MMMM YYYY"),
                content: "Imagina un caracol cibernético que navega por el vasto ciberespacio con paciencia y curiosidad. Cada línea de código es un nuevo camino, cada página web un mundo por descubrir. Este caracol moderno avanza lentamente pero con determinación, asimilando conocimiento y dejando un rastro de innovación a su paso.",
                color: "verde",
            },
            {
                title: "Tejiendo el Tapiz Digital",
                date: "Publicado el dia: " + moment().format("DD MMMM YYYY"),
                content: "La programación web es como tejer un tapiz digital. Cada línea de código es un hilo que se entrelaza con otros para crear una experiencia en línea única. Con cada función y algoritmo, se añaden patrones y texturas a este tapiz, formando un resultado funcional y hermoso que los usuarios pueden explorar y disfrutar.",
                color: "azul",
            },
            {
                title: "Hojas Rojas en el Viento Digital",
                date: "Publicado el dia: " + moment().format("DD MMMM YYYY"),
                content: "Imagina hojas rojas danzando en el viento digital. Cada hoja es un fragmento de contenido que fluye en la red, llevando consigo información y emociones. Estas hojas rojas pueden ser artículos, imágenes o videos, y se dispersan por la vasta red virtual, creando una experiencia única para cada navegante.",
                color: "rojo",
            },
            {
                title: "El Cielo Estrellado de la Web",
                date: "Publicado el dia: " + moment().format("DD MMMM YYYY"),
                content: "El ciberespacio es un vasto cielo estrellado donde cada sitio web es una estrella brillante. Navegar por la web es como explorar la bóveda celeste: algunas estrellas son destinos familiares, otras son nuevas y emocionantes. Con cada clic, despegamos en un viaje por las constelaciones digitales, explorando los confines del conocimiento y la creatividad.",
                color: "celeste",
            },
            {
                title: "El Arte de la Interacción",
                date: "Publicado el dia: " + moment().format("DD MMMM YYYY"),
                content: "La programación web es el arte de la interacción digital. Cada línea de código es como un pincelazo en el lienzo de la experiencia del usuario. Los desarrolladores tejen cuidadosamente funciones y efectos para crear una sinfonía de interacción: botones que responden al toque, animaciones que capturan la atención y formularios que conectan a los visitantes con los servicios que necesitan.",
                color: "morado",
            },
        ]

        post.forEach((item, index) => {
            let post =
                `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer Más</a>
                </article>
            `;
            $("#post").append(post);
        });
    }

    //selector del temas
    let theme = $("#theme");

    $("#to-green").click(function () {
        theme.attr("href", "/css/green.css")
    });

    $("#to-red").click(function () {
        theme.attr("href", "/css/red.css")
    });

    $("#to-blue").click(function () {
        theme.attr("href", "/css/blue.css")
    });

    //scroll subir arriba
    $(".subir").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //El login falso con localstorage
    $("#login form").submit(function () {
        let form_name = $("#nm").val();
        localStorage.setItem("userData", form_name);
    });

    let userData = localStorage.getItem("userData");

    if (userData != null || userData != undefined) {
        let about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + userData + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });

        $("#login").hide();
    }

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

});