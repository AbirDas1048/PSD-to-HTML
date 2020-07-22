

        /*Starting Progress Bar JS */

$('.percentage').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

});

$('svg.radial-progress').each(function (index, value) {
    $(this).find($('circle.complete')).removeAttr('style');
});

$(window).scroll(function () {
    
    
    $('svg.radial-progress').each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
            $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
            $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
        ) {
            // Get percentage of progress
            percent = $(value).data('percentage');
            // Get radius of the svg's circle.complete
            radius = $(this).find($('circle.complete')).attr('r');
            // Get circumference (2πr)
            circumference = 2 * Math.PI * radius;
            // Get stroke-dashoffset value based on the percentage of the circumference
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Transition progress for 1.25 seconds
            $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);
        }
    });

    
}).trigger('scroll');


/* Ending Progress Bar JS */

/*Starting Isotop JS */

$('.btn').click(function () {
    $('.btn').removeClass('active').addClass('inactive');
    $(this).removeClass('inactive').addClass('active');
});

$(".fifth_section .container #web").click(function () {
    $(".fifth_section .container .row .col-sm-6").filter("#two, #four").hide(2000);
    $(".fifth_section .container .row .col-sm-6").filter("#one, #three").show(2000);
});

$(".fifth_section .container #apps").click(function () {
    $(".fifth_section .container .row .col-sm-6").filter("#three, #four").hide(2000);
    $(".fifth_section .container .row .col-sm-6").filter("#one, #two").show(2000);
});

$(".fifth_section .container #icons").click(function () {
    $(".fifth_section .container .row .col-sm-6").filter("#one, #two, #three").hide(2000);
    $(".fifth_section .container .row .col-sm-6").filter("#four").addClass("col-sm-6 offset-sm-3");
    $(".fifth_section .container .row .col-sm-6").filter("#four").show(2000);
    
});

$(".fifth_section .container #all").click(function () {
    $(".fifth_section .container .row #four").removeClass("col-sm-6 offset-sm-3").addClass("col-sm-6");
    $(".fifth_section .container .row .col-sm-6").show(2000);

});

/* Ending Isotop JS */