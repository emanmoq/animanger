jQuery(function ($) {

    $(window).scroll(function () {
      
        scrollTop = $(window).scrollTop();

        if (scrollTop >($('header').height())) {
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

      function onScroll(event){
        var scrollPosition = $(document).scrollTop();
      $('.nav-link[href^="#"').each(function () {
        console.log($(this).attr('href')); 
        var refElement = $($(this).attr("href"));
      //   console.log($(this).attr("href")); //log
        if (refElement.length&&refElement.position().top -150 < scrollPosition  ) {
        $('.nav-link').removeClass("active");
        $(this).addClass("active");
        }
        else if( $(document).scrollTop() <= 100){
          $('.nav-link').removeClass("active");
          $('.nav-link.home').addClass("active");
        }
    
        else if( $("#news").position().top -50  > scrollPosition && scrollPosition < $("#news").height() ){
          $('.nav-link').removeClass("active");
          $('.nav-link.news').addClass("active");

        }
        else if( $("#aboutus").position().top -50  > scrollPosition && scrollPosition < $("#contactUs").position().top -50 ){
          $('.nav-link').removeClass("active");
          $('.nav-link.about').addClass("active");

        }
      
        else{
        $(".nav-link").removeClass("active"); 
        }
      });
    }

 
    $(document).on("scroll", onScroll);
    $('.navbar-collapse .nav-link').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top -100 }, 1000);
      $(".nav-link").removeClass("active"); 
      $(this).addClass("active");
    });
    $('.dropdown-submenu').click( function(){
      $('.innerDropDown').hide()
      $(this).find('.innerDropDown').toggle();
      return false
    });
    $(".dropdown ").click(function(){
      if($(".innerDropDown").show()){
        $(".innerDropDown").hide()
      }
      
    })
   
    $(".modal .editBtn").click(function(){
      $(this).parents().modal('hide')
    });
    var arabicPattern = /[\u0600-\u06FF]/;

$('.searchForm-control').bind('input propertychange', function(ev) {

    var text = ev.target.value;

    if (arabicPattern.test(text)) {
        // arabic;
        $('.searchForm-control').css('direction', 'rtl')

    }
    else{
      $('.searchForm-control').css('direction', 'ltr')
    }
});
});

