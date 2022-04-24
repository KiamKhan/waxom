$(function () {

    "use strict"

    // back to top button
    $('.btt').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });

    $(window).on('scroll', function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 500) {
            $('.btt').fadeIn()
        } else {
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

    // 
    $('.serv_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    autoplay: true
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                    speed: 2000,
                    dots: false,
                    arrows: false,
                }
            }
        ]
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
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    centerMode: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    speed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });


    // slider for post part
    $('.post_item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '<i class="fas fa-chevron-right next_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    speed: 2000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    });

    $('.partner').slick({
        slidesToShow: 4,
        responsive: [
        {
            breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    autoplay: true
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false
            }
        }
    ]
    });
});