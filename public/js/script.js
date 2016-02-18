/**
 * Created by Nhokchien on 2/16/2016.
 */
var is_safari = navigator.userAgent.indexOf("Safari") > -1;

function createSliders(){
    $('#news-items').carouFredSel({
        responsive: true,
        prev: '#news-prev',
        next: '#news-next',
        items : {
            visible: 3
        },
        scroll:{
            easing:'easeOutExpo',
            duration: 1000,
            items: 1
        },
        pagination:'#new-pagination',
        onCreate: function(){
            $('#news-prev, #news-next').css('top',$('.news-image:first').height()/2);
        }
    });

    $('#product-items').carouFredSel({
        responsive: true,
        prev: '#product-prev',
        next: '#product-next',
        items : {
            visible: 4
        },
        auto: false,
        scroll:{
            easing:'easeOutExpo',
            duration: 1000,
            //items: 1,
            auto: false
        },
        pagination:'#product-pagination'
    })
}

$(document).ready(function(){
    if(!is_safari)  createSliders();
});

$(window).load(function() {
    if(is_safari) createSliders();
});