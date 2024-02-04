$(document).ready(() => {
    var $navbar = $('header.fixed-top');
    var stickyTop = $navbar.offset().top;
    var scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 50) {
        $navbar.addClass('bg_nav_white');
    }

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= 50) {
            $navbar.addClass('bg_nav_white');
        } else {
            $navbar.removeClass('bg_nav_white');
        }
    });
    
    let owl = $('#carous');
    // jumbotron carousel
    owl.owlCarousel({
        touchDrag  : false,
        mouseDrag  : false,
        loop:true,
        margin:10,
        nav:true,
        center:true,
        dots:false,
        autoplayTimeout: 10000,
        autoplay:true,
        fluidSpeed: true,
        autoplaySpeed: 6000,
        smartSpeed:3000,
        animateIn: 'fadeIn', animateOut: 'fadeOut',
        navText : ['<i class="bi bi-chevron-left fs-5 text-white"></i>','<i class="bi bi-chevron-right fs-5 text-white"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    let nat1 = $('#nat-carous1');

    nat1.owlCarousel({
        touchDrag  : false,
        mouseDrag  : false,
        loop:true,
        margin:10,
        nav:true,
        center:true,
        dots:false,
        autoplayTimeout: 10000,
        autoplay:true,
        fluidSpeed: true,
        autoplaySpeed: 6000,
        smartSpeed:3000,
        navText : ['<i class="bi bi-chevron-left fs-5 text-white"></i>','<i class="bi bi-chevron-right fs-5 text-white"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // Add hover event handlers
    $('.dropdown').hover(
        function () {
            // On hover in
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
        },
        function () {
            // On hover out
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
        }
    );
})