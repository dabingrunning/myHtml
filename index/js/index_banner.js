// JavaScript Document
$(function(){
    var ww=parseInt($(window).width());
    $(window).resize(function(){
        ww=parseInt($(window).width());
    })
    var tim;
    var i=0;
    var m=$('.ind_b').eq(0).html();
    $('.ind_b').eq(0).addClass('xzz');
    $('.index_bnav li').eq(0).addClass('xzz');
    $('.ind_b1').clone().appendTo(".index_b");
    var iLength=$('.ind_b').size()-1;
    $('.index_b').width((iLength+1)*100+'%');
    $('.ind_b').width(100/(iLength+1)+'%');
    function gun(){
        i++;
        if(i==iLength){

            $('.index_b').stop(true,false).animate({'margin-left':-i*ww+'px'},500,function(){
                $('.index_b').css({'margin-left':'0px'});
            });
            i=0;


        }
        else{
            $('.index_b').stop(true,false).animate({'margin-left':-i*ww+'px'},500);
        }
        $('.ind_b').eq(i).addClass('xzz').siblings('.ind_b').removeClass('xzz');
        $('.index_bnav li').eq(i).addClass('xzz').siblings('li').removeClass('xzz');
    }
    tim=setInterval(function(){
        gun();
    },7500)

    $('.index_bnav li').hover(function(){
        i=$(this).index();
        if(i==iLength){

            $('.index_b').stop(true,false).animate({'margin-left':-i*ww+'px'},500,function(){
                $('.index_b').css({'margin-left':'0px'});
            });
            i=0;


        }
        else{
            $('.index_b').stop(true,false).animate({'margin-left':-i*ww+'px'},500);
        }
        $('.ind_b').eq(i).addClass('xzz').siblings('.ind_b').removeClass('xzz');
        $('.index_bnav li').eq(i).addClass('xzz').siblings('li').removeClass('xzz');
        clearInterval(tim);
    },function(){
        tim=setInterval(function(){
            gun();
        },7500)
    })
})