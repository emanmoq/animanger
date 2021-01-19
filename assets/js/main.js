jQuery(function ($) {

    $(window).scroll(function () {
      
        scrollTop = $(window).scrollTop();

        if (scrollTop >($('.headerImg').height()+ 200)) {
            $('header').addClass('scrollNav');
        }

        else {
            $('header').removeClass('scrollNav');
        }
        if (($(window).scrollTop() + $(window).height()) > $(document).height()) {

            $(".up").stop(true).animate({
                opacity: 1
            }, 100);

        } else {

            $(".up").stop(true).animate({
                opacity: 0
            }, 250);
        }
    
    });
    $(".up").on("click", function () { $("html, body").animate({ scrollTop: 0 }, "slow"); return false; });

          $('.OurSpeakersCar').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 15,
            nav:true,
            responsive: {
              0: {
                items:1,
                nav:true,

              },
              600:{
                items:2,

                nav:true,
              },
              1000:{
                items:4,
                  nav:true,
              }
         
            }
          });

      function onScroll(event){
        var scrollPosition = $(document).scrollTop();
      $('.nav-link[href^="#"').each(function () {
        console.log($(this).attr('href')); 
        var refElement = $($(this).attr("href"));
      //   console.log($(this).attr("href")); //log
        if (refElement.length&&refElement.position().top-100 <= scrollPosition) {
        $('.nav-link').removeClass("active");
        $(this).addClass("active");
        }
        else if( $(document).scrollTop() <= 100){
          $('.nav-link').removeClass("active");
          $('.nav-link.home').addClass("active");
        }
        else{
        $(this).removeClass("active"); 
      
        }
      });
    }
    $(document).on("scroll", onScroll);
    $('.navbar-collapse .nav-link').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    
      return false;
    });
    
});

