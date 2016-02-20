/**
 * Created by Nhokchien on 2/16/2016.
 */
var is_safari = navigator.userAgent.indexOf("Safari") > -1;

function createSliders(){
    var newsItems    = 3;
    var newsScroll   = 2;
    var productItems = 4;
    if($(window).width() < 960){
        newsItems    = 2;
        newsScroll   = 2;
        productItems = 2;
    }
    if($(window).width() < 640){
        newsItems    = 1;
        newsScroll   = 1;
        productItems = 1;
    }

    $('#slide-items').carouFredSel({
        responsive: true,
        prev: '#home-prev',
        next: '#home-next',
        scroll:{
            easing:'easeInOutExpo',
            duration: 1500,
            pauseOnHover:true,
            onBefore: function(data){
                $('.old').removeClass('old');
                data.items.old.addClass('old');
            },
            onAfter:function(data){
                $('.current').removeClass('current');
                data.items.visible.addClass('current');
            }

        }
    });

    $('#news-items').carouFredSel({
        responsive: true,
        prev: '#news-prev',
        next: '#news-next',
        items : {
            visible: newsItems
        },
        scroll:{
            easing:'easeOutExpo',
            duration: 1000,
            items: newsScroll,
            pauseOnHover:true,
            onBefore:function(){
                $('#news-prev, #news-next')
                    .css('top',$('.news-image:first')
                    .height()/2 + 74);
            }
        },
        pagination:'#new-pagination',
        onCreate: function(){
            setTimeout(function(){
                $('#news-prev, #news-next')
                    .css('top',$('.news-image:first')
                    .height()/2 + 74);
            },500);
        }

    });

    $('#product-items').carouFredSel({
        responsive: true,
        prev: '#product-prev',
        next: '#product-next',
        items : {
            visible: productItems
        },
        scroll:{
            easing:'easeOutExpo',
            duration: 1000,
            pauseOnHover:true
        },
        auto:{
            timeoutDuration: 8000
        },
        pagination:'#product-pagination'
    });

    $('.news-page-slide-wrapper').each(function(){
        var nextBt = '#'+ $(this).parent().find('.next-icon').attr('id');
        var prevBt = '#'+ $(this).parent().find('.prev-icon').attr('id');
        console.log(nextBt);
        $(this).carouFredSel({
            responsive: true,
            auto: false,
            next: nextBt,
            prev: prevBt
        });
    });
}

$(document).ready(function(){
    if(!is_safari)  createSliders();
    $(window).resize(function(){
        setTimeout(function(){
            $('#news-prev, #news-next').css('top',$('.news-image:first').height()/2 + 74);
            var newsItems    = 3;
            var newsScroll   = 2;
            var productItems = 4;


            if($(window).width() < 960){
                newsItems    = 2;
                newsScroll   = 2;
                productItems = 2;
            }
            if($(window).width() < 640){
                newsItems    = 1;
                newsScroll   = 1;
                productItems = 1;
            }

            $('#news-items').trigger('configuration',{
                items : {visible: newsItems},
                scroll: {items: newsScroll},
                reInit: true
            });
            $('#product-items').trigger('configuration',{
                items : {visible: productItems},
                reInit: true
            });
            $('.news-page-slide-wrapper, #slide-items').trigger('configuration',{
                reInit: true
            });
        },300);

    });
});

$(window).load(function() {
    if(is_safari) createSliders();
    setTimeout(function() {
        $('#news-items,#product-items,.news-page-slide-wrapper,#slide-items').trigger('configuration', {
            reInit: true
        });
    },300);
});