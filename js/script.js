$(document).ready(function() {

    $(".smooth_scroll").click(function() {
        $("html, body").animate({ //takes entire html, body and animates
            'scrollTop':$(this).offset().top 
        }, 700);
//We get the top coordinate of the cicked item and tell the webpage via
// the scrollbar to move down to that position at the defined pace.
    });


    $("#aboutme_link").click(function() {
        $(".aboutme").toggle();
        $(".aboutme").siblings().hide();
        $(this).siblings().removeClass("styling_links2").removeClass("styling_links3");
        $(this).addClass("styling_links");


    })

    $("#portfolio_link").click(function() {
        $(".portfolio").toggle();
        $(".portfolio").siblings().hide();
        $(this).addClass("styling_links2");
        $(this).siblings().removeClass("styling_links").removeClass("styling_links3");
    })

    $("#contact_link").click(function() {
        $(".contact").toggle();
        $(".contact").siblings().hide();
        $(this).addClass("styling_links3");
        $(this).siblings().removeClass("styling_links").removeClass("styling_links2");

    })

});
