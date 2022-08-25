$(document).ready(function(){

$('.back-to-top').click(function(){

    $(html,body).animate({scrollTop:0},1000)
})
$(window).scroll(function(){
    const scroller=$(this).scrollTop();
    if(scroller>500){
        $('.back-to-top').fadeIn(500)
    }
    else{
        $('.back-to-top').fadeOut(500)
    }
})

})