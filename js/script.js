$(document).ready(function() {

        // $(".information" a).click(function() {
        //     var id = $(this).attr('href');
        //     $("html, body").animate({ scrollTop: $(id).offset().top()}, 2000);
        //     return false;
      // });

    $("#aboutme_link").click(function() {
        $(".aboutme").show();
        $(".aboutme").siblings().hide();
        // $("#aboutme_link").addClass("styling_links")
        // $("#aboutme_link").siblings().removeClass("styling_links");
        /*$(".portfolio").hide();*/
        $(this).siblings().removeClass("styling_links2").removeClass("styling_links3");
        $(this).addClass("styling_links");
        

    })

    $("#portfolio_link").click(function() {
        $(".portfolio").show();
        $(".portfolio").siblings().hide();
        $(this).addClass("styling_links2");
        // $(".aboutme").hide();
        // $(".contact").hide();
        $(this).siblings().removeClass("styling_links").removeClass("styling_links3");
    })

    $("#contact_link").click(function() {
        $(".contact").show();
        $(".contact").siblings().hide();
        $(this).addClass("styling_links3");
        // $(".portfolio").hide();
        // $(".aboutme").hide();
        $(this).siblings().removeClass("styling_links").removeClass("styling_links2");

    })

});

