/**
 * Created by Nhokchien on 2/16/2016.
 */

$(window).load(function() {
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
});