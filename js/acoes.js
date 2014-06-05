/*
* Copyright (c) 2014 Vinicius Weber
* Licensed under the MIT License:
* http://www.opensource.org/licenses/mit-license.php
*/


(function(WB){
    
    WB.simpleSlideShow = function(selector, settings){
        
        // settings
        var config = {
            'delay': 4000,
            'fadeSpeed': 500
        };
        if ( settings ){WB.extend(config, settings);}


        // variables
        var obj = WB(selector);
        var banner = obj.children('.banner');
        var count = banner.length;
        var i = 0;

        // show first image
        banner.eq(0).show();

        // run slideshow
        setInterval(function(){
            banner.eq(i).fadeOut(config.fadeSpeed);
            i = ( i+1 == count ) ? 0 : i+1;
            banner.eq(i).fadeIn(config.fadeSpeed);
        }, config.delay);

        return this;
    };

})(jQuery);


$(window).scroll(function () {

scrollPos = $(this).scrollTop();

jogaParalax = -scrollPos * 0.8;

//EFEITO PARALLAX
    $(".banner").css({
      "background-position" : "center "+jogaParalax+"px"
      //"top" : +(scrollPos/10)+"px"
    }); 
});