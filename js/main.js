$(document).ready(function() {
    $('.header').height($(window).height());
})

$(".navbar a").click(function() {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)
})

function begin() {
    $("body,html").animate({
        scrollTop: $("#about").offset().top
    }, 1000)
}
