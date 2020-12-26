$(function(){

    // adjust slide heig
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();

    $('.slider , .carousel-item').height(winH - (upperH + navH));


    //featuers work shuffel
    $('.featuers-work ul li').on('click' , function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.featuers-work .images .col-sm').css('opacity' , 1);
        }else{
            $('.featuers-work .images .col-sm').css('opacity' , '.3');
            $($(this).data('class')).parent().css('opacity' , 1);
        }
    });

})