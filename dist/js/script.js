$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav: true,
        navText : ["",""],
        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause: true,
        items:1,
        smartSpeed:1050,
        margin:1000
    });
    $(".decision__carousel").owlCarousel({
        navText: [
            '<span class="arrow-owl arrow-left"></span>',
            '<span class="arrow-owl arrow-right"></span>'
        ]
    });
});