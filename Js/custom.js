$(function () {
    //Banner Slider
    $('#banner').slick({
        arrows: false,
        autoplay:true,
        autoplaySpeed: 1000,
        speed:500,
       
    });

    //About Slider
    $('.about_slider').slick({
        infinite: true,
        slidesToShow:4,
        slidesToScroll: 3,
        prevArrow:'<i class="fas fa-arrow-left about_slider_left"></i>',
        nextArrow:'<i class="fas fa-arrow-right about_slider_right"></i>',
    })
})