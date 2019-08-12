$(document).ready(function () {

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
    $("#3").removeClass("active");
    $("#4").addClass("active");

    $("#emailButton").on("click", function () {
        var emailBody = $("#emailFormInput").val();
        var subject = 'from profile page'
        window.location = 'mailto:horacio.jobs@gmail.com?subject=' + subject + '&body=' + emailBody;
    })
})