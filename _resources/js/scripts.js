$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass('bg-transparent').addClass("darkHeader");
        } else {
            header.removeClass("darkHeader").addClass('bg-transparent');
        }
    });
});
