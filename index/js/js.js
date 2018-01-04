
$(function(){

    $(window).scroll(function(){
        if ($(window).scrollTop()>50){
            $(".ca_menu").stop().addClass('ca_menu_b');
        }
        else
        {
            $(".ca_menu").stop().removeClass('ca_menu_b');
        }
    });

    $('.ny_ca1_k').hover(function(){
        $(this).children('.ny_ca1_k a').stop(true,true).fadeIn();
    },function(){
        $(this).children('.ny_ca1_k a').stop(true,true).fadeOut();
    })


});