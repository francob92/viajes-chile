$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $("#boton_contacto").hover(function () {
        $(this).css("color", "red");
    });

    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var cat = this.hash;

            $("html, body").animate({
                scrollTop: $(cat).offset().top
            }, 800, function () {
                window.location.hash = cat;
            });
        }
    });
});