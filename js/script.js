$(function () {

    "use strict"

    // menu fix
    let menuOff = $('#main_menu').offset().top;

    $(window).on('scroll', function(){
        let scrolling = $(this).scrollTop();

        if(scrolling > menuOff){
            $('#main_menu').addClass('menu_fix');
        }else{
            $('#main_menu').removeClass('menu_fix');
        }
    });

    // back to top button
    $('.btt').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });

    $(window).on('scroll', function(){
        let scrolling = $(this).scrollTop();

        if(scrolling > 500){
            $('.btt').fadeIn()
        }else{
            $('.btt').fadeOut()
        }
    })

    // project filter
    var mixer = mixitup('.project_inner');

    // video part venobox
    $('.venobox').venobox();

    // counter part
    $('.counter').counterUp({
        delay: 20,
        time: 1000,
    });

    // slider for slider part
    $('.slider_cont').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        centerMode: true,
        centerPadding: '0'
    });
    

    // slider for post part
    $('.post_item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right next_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
    });
});