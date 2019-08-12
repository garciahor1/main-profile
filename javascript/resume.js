$(".navbar-toggler").on("click", function () {

    if ($(".navbar-toggler").attr("aria-expanded") == "false") {
        $("#navbarToggleExternalContent").attr("class", "collapse.this");
        $(".navbar-toggler").attr("aria-expanded", "true");
    } else if ($(".navbar-toggler").attr("aria-expanded") == "true") {
        $("#navbarToggleExternalContent").attr("class", "collapse");
        $(".navbar-toggler").attr("aria-expanded", "false");
    };

});

$("#1").removeClass("active");
$("#2").removeClass("active");
$("#3").addClass("active");
$("#4").removeClass("active");


