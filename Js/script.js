$(function () {
    var menuTopOffSet = $('.menu').offset().top
    $(window).on('scroll',function () {
       var scrollSize = $(window).scrollTop()

       if(scrollSize > menuTopOffSet){
           $('.menu').addClass('menuFixed')
       }else{
        $('.menu').removeClass('menuFixed') 
       }

  

       if(scrollSize > 800){
        $('#backToTop').fadeIn(1000)
    }else{
        $('#backToTop').fadeOut(1000)
    }

})

    $('#backToTop').on('click',function () {
        $('html,body').animate({
            scrollTop:0
        },2000)
   
    })

   
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