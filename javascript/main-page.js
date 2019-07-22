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

   $(".flex-sm-fill").on("click", function(){
    let value =$(this).attr("id");
    console.log(value);
if(value=="1")
{   
    $( "#1" ).addClass( "active" );
    $( "#2" ).removeClass( "active" );
    $( "#3" ).removeClass( "active" );
    $( "#4" ).removeClass( "active" );
} else if(value=="2")
{
    $( "#1" ).removeClass( "active" );
    $( "#2" ).addClass( "active" );
    $( "#3" ).removeClass( "active" );
    $( "#4" ).removeClass( "active" );
}else if(value=="3")
{
    $( "#1" ).removeClass( "active" );
    $( "#2" ).removeClass( "active" );
    $( "#3" ).addClass( "active" );
    $( "#4" ).removeClass( "active" );
}else if(value=="4")
{
    $( "#1" ).removeClass( "active" );
    $( "#2" ).removeClass( "active" );
    $( "#3" ).removeClass( "active" );
    $( "#4" ).addClass( "active" );
}

   });


});