// JavaScript Document
$(function(){





    var wh;//屏幕高

    var jishu=0;
    $('.top').removeClass('xz1');
    setTimeout(function(){
        $('.navw').removeClass('xz2');
        setTimeout(function(){
            $('.navw').removeClass('trans');
        },1000)
    },200)
    $('.top').addClass('xz');
    function _resize(){

        light_indextop=[];
        $('.light_indexbj').each(function(i){

            // if(i==2){
            //   light_indextop[i]=parseInt($(this).offset().top);
            // }
            // else if(i==4){
            //   light_indextop[i]=parseInt($(this).offset().top)+200;
            // }
            // else if(i==5){
            //   light_indextop[i]=parseInt($(this).offset().top);
            // }
            // else{
            light_indextop[i]=parseInt($(this).offset().top);
            // }
        })
        wh=parseInt($(window).height());
        $('.z_viptanchu').height(wh+'px');
        var ww=parseInt($(window).width());

        $('.top').height(wh);
        // $('.team,.team1').css({'width':ww+'px','height':ww/12*6+'px'});
        // $('.tdtpz').css({'width':ww/2+'px','height':ww/6+'px','margin-top':-(ww/12)+'px','margin-left':-ww/4+'px'});
        // $('.teamsec1 a').css({'width':ww/12+'px','height':ww/12+'px'});
        // $('.teamsec1nr').css('padding-top',(ww/12*6-366)/2+'px');
    }
    _resize();
    $(window).resize(function(){
        _resize();
    })

// 导航小动画
    $('.ul>li>a').hover(function(){
        $(this).children('.index_sp1').animate({'top':'-20px'},200);
        $(this).children('.index_sp2').animate({'top':'0px'},200);
        $(this).children('span').children('span').stop(true,false).fadeToggle(200);
    },function(){
        $(this).children('.index_sp1').animate({'top':'0px'},200);
        $(this).children('.index_sp2').animate({'top':'20px'},200);
        $(this).children('span').children('span').stop(true,false).fadeToggle(200);
    })


    var len1=light_indextop.length;
    function chushihua(){
        var scr=$(window).scrollTop();


        if(scr>wh-15){
            if(jishu==0){
                $('.top').removeClass('xz');
                $('.navw,.nav').css({'height':'60px'});
                $('.navw').css({'position':'fixed','top':'0px'});
                $('.navw').animate({'top':'0px'},150)
                $('.logo img').css({'height':'52px'});
                $('.logo').css({'margin-top':'-26px'});
                jishu=1;
            }
        }
        if(scr<wh-15){
            if(jishu==1){
                $('.top').addClass('xz');
                $('.navw,.nav').css({'height':'135px'});
                $('.navw').css({'position':'absolute'});
                $('.logo img').css({'height':'76px'});
                $('.logo').css({'margin-top':'-40px'});
                $('.navw').animate({'top':'0px'},150)
                jishu=0;
            }
        }
        for(var i=0;i<len1;i++){
            if(scr>light_indextop[i]){
                $('.light_indexbj').eq(i).addClass('xz');
            }
        }
    }
    chushihua();
    $(window).scroll(function(){
        chushihua();

    })


    $('.casek').hover(function(){
        $(this).find('.casekyc').stop(true,false).fadeToggle();
    })


    $('.casemain1').eq(0).show();
    $('.casenav1 li').click(function(){
        var i=$(this).index();
        $('.casemain1').eq(i).fadeIn().siblings('.casemain1').fadeOut();

    })
    $('.hezuomain a').hover(function(){
        $(this).siblings().find('.img2').stop(true,false).fadeToggle(200);
    })


    $('div.index_xf1').hover(function(){
        $(this).children('.index_xfnr1').stop(true,true).fadeOut();
        $(this).children('.index_xfnr2').stop(true,false).animate({'left':'0px'},1000);
    },function(){
        $(this).children('.index_xfnr1').stop(true,true).fadeIn();
        $(this).children('.index_xfnr2').stop(true,false).animate({'left':'-230px'},1000);
    })


    $(function(){
        $('.xjdiv12-14').hover(function(){
            $(this).find('.xjdiv12-14-1').fadeOut(500);
            $(this).find('.xjdiv12-14-2').animate({'left':'0px'},500);
        },function(){
            $(this).find('.xjdiv12-14-1').fadeIn(500);
            $(this).find('.xjdiv12-14-2').animate({'left':'-333px'},500);
        })
    })



    $(function(){
        $('a').focus(function(){
            $(this).blur();
        })
    })

    $('.z_vip').click(function(){
        $('.z_viptanchu').fadeIn().addClass('xz');

    })
    $('.z_viptanchu').click(function(){
        $(this).fadeOut().removeClass('xz');
    })

}) 