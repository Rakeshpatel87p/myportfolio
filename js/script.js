var headers = $(".headers > h2").toArray();
var images = $(".portfolio-images > img").toArray();
var i = 0;

$(function() {

    $('.name').click(function() {
        $('.aboutme').slideToggle(1000);
        $(headers[i]).hide();
        $(images[i]).hide();
        $('.masthead').addClass('masthead-change');
        i = 0;
        $('.portfolio-title').hide();

    });

    $('.jobtitle').click(function() {
        $('.portfolio-title').show();
        $('.masthead').addClass('masthead-change');
        $('.aboutme').hide();
        fill(i);

    });

    $("#next").click(function() {
        if (i < 3) {
            i++;
            fill(i);
        } else if (i == 3) {
            i = 0;
            fill(i);
        };

    });

    $(".portfolio-images").mouseover(function() {
        $('.headers').hide();
        
    });

    $(".portfolio-images").mouseout(function() {
        $('.headers').show();

    });

function fill(i) {
        console.log(i);
        return $(images[i]).fadeIn().siblings().hide(),
            $(headers[i]).fadeIn().siblings().hide();

};

})

// function pulsate() {
//   for(var i=0; i<2; i++) {
//     $("#pulsate").animate({opacity: 0.2}, 1000, 'linear')
//      .animate({opacity: 1}, 1000, 'linear');
//   }
// }

// Images are not showing up, i is not displaying every 3rd click
