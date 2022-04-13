$(function(){
    'use strict';

    var upperH=$(".upper-bar").innerHeight(),
    navbarH =$(".navbar").innerHeight(),
    windowH= $(window).height();
    $(".slider,.carousel-item").height(windowH-(upperH+navbarH));

    // featured work

    $(".featured-work li").click(function(){
       
        $(this).addClass("active-li").siblings().removeClass("active-li");
        if($(this).data("class")=="all"){
            $(".featured-work .shuffle-img .col-md").css('opacity',1);
        }
        else
        $(".featured-work .shuffle-img .col-md").css('opacity',0.09);
        $($(this).data("class")).parent().css('opacity',1);
    });
})