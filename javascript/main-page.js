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

  $("#1").addClass("active");
  $("#2").removeClass("active");
  $("#3").removeClass("active");
  $("#4").removeClass("active");

  $('.carousel').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 996,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1,
         
        }
      }
    ]
  });
});