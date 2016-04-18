var headers = $(".headers > h2").toArray();
var images = $(".portfolio-images > img").toArray();
var i = 0;

$(function() {

    $('.name').click(function(){
        $('.aboutme').slideToggle(1000);
        $('.masthead').toggleClass('masthead-change');

    });

    $('.jobtitle').click(function(){
    	$('.masthead').toggleClass('masthead-change');
        $('.aboutme').hide();
        fill(i);
    	console.log();

    	$(".navigateForward").click(function() {
        if (i < 3) {
            i++;
            fill(i);
        } else if (i == 3) {
        	i=0;
        	fill(i);
        };

    })

})    	

});    

function pulsate() {
  for(var i=0; i<2; i++) {
    $("#pulsate").animate({opacity: 0.2}, 1000, 'linear')
     .animate({opacity: 1}, 1000, 'linear');
     console.log()
  }
}

function fill(i) {
        return $(headers[i]).slideToggle().siblings().hide(),
            $(images[i]).slideToggle(1000).siblings().hide(),
            console.log(i);
    }

