$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass('bg-transparent').addClass("dark-header");
        } else {
            header.removeClass("dark-header").addClass('bg-transparent');
        }
    });
});
