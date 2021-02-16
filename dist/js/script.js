$(document).ready(function(){
    const headerSlider = $('.owl-carousel');
    headerSlider.owlCarousel({
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

    $('ul.decision__tabs').on('click', 'li:not(.decision__tab_active)', function() {
        $(this)
          .addClass('decision__tab_active').siblings().removeClass('decision__tab_active')
          .closest('div.decision__content').find('div.decision__carousel').removeClass('decision__carousel_active owl-carousel_active').eq($(this).index()).addClass('decision__carousel_active owl-carousel_active');
      });
});