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
        autoplaySpeed: 3000,
        speed:800,
       dots:true,
       dotsClass:"banner_slick_dots",
        });

    //About Slider
    $('.about_slider').slick({
        infinite: true,
        slidesToShow:4,
        slidesToScroll: 3,
        prevArrow:'<i class="fas fa-arrow-left about_slider_left"></i>',
        nextArrow:'<i class="fas fa-arrow-right about_slider_right"></i>',
    })

    //Work For Venubox

    $('.venobox').venobox ({
        spinner:'three-bounce',
        spinColor:'#05928d',
        titleattr: 'data-title',
        titleBackground: 	'#161617',
    }); 

    //Counter Up
    $('.counter').counterUp ({
        delay: 100,
        time: 1000
    });

    //Smooth Scroll
    $("a").on('click', function(event) {

        if (this.hash !== "") {
          
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });

      new WOW().init();


      $(window).on('load',function(){
        $('#preloader').fadeOut(1000);
      })

      //Work filterizer

      $('.filter-container').filterizr();

      $('.work_menu ul li').on('click', function () {
        $('.work_menu ul li').removeClass('active')
        $(this).addClass('active')
     })


     //Particles js

     
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode":  "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
})