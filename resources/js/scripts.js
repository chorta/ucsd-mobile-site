// navbar transition

$(function() {
    var header = $(".navbar");

    if(window.scrollY !=0){
     header.addClass("dark-header").removeClass("bg-transparent");
    }

    var intFrameWidth = window.innerWidth;

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (intFrameWidth <= 767) {
          if (scroll >= 11) {
              header.removeClass('bg-transparent').addClass("mobile-dark-nav");
          } else {
              header.removeClass("mobile-dark-nav").addClass('bg-transparent');
          }
        } else {
          if (scroll >= 450) {
              header.removeClass('bg-transparent').addClass("dark-header");
          } else {
              header.removeClass("dark-header").addClass('bg-transparent');
          }
        }
    });
});

// smooth scrolling

$(document).ready(function() {
    $(".nav-link,.ucsd-logo").click(function() {
        var t = $(this).attr("href");
        $('.active').removeClass('active');
        $("html, body").animate({
            scrollTop: $(t).offset().top - 71
        }, {
            duration: 1e3,
        });

        $('body').scrollspy({ target: '#main-nav',offset: $(t).offset().top });
        $(this).parent().addClass('active');

        return false;
    });
});


$('body').scrollspy({ target: '#main-nav',offset: 0 });
