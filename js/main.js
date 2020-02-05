$('.banner').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplay:15000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    touchDrag:false,
    mouseDrag:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$(document).on('scroll', function () {

    if($(this).scrollTop() >0){
        $('.navigation').addClass('header-fixed');
    }
    else{

        $('.navigation').removeClass('header-fixed');
    }   
});


$(document).ready(function(){



    $(window).scroll(function(){



        if($(this).scrollTop()>800){



            $('.scrollToTop').fadeIn();

        }



        else{



          $('.scrollToTop').fadeOut();  



        }

    });



    $('.scrollToTop').click(function(){



        $('html, body').animate({scrollTop:0},1000);

        return false;

    });



});
(function ($) {

    'use strict';
    var $window = $(window);

        // :: Preloader Active Code

      $window.on('load', function () {

          $('#preloader').fadeOut('slow', function () {

              $(this).remove();

          });

      });

    })(jQuery);

$(document).ready(function () {
    $(".search-icons").click(function () {
        $(".search-filed").slideToggle("slow");
    });
    $(".main-banner").click(function () {
        $(".search-filed").slideUp("slow");
    });
    $(".inside-content-wrapper").click(function () {
        $(".search-filed").slideUp("slow");
    });
});

var d = new Date();
document.getElementById("datetime").innerHTML = d;




(function ($) {

    'use strict';
    var $window = $(window);
      $window.on('load', function () {

          $('#preloader').fadeOut('slow', function () {

              $(this).remove();

          });

      });

    })(jQuery);
