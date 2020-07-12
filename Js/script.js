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


})