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
    
    let mainCarous = $('#carous');
    // jumbotron carousel
    mainCarous.owlCarousel({
        touchDrag  : false,
        mouseDrag  : false,
        loop:true,
        margin:10,
        nav:false,
        center:true,
        dots:false,
        autoplayTimeout: 10000,
        autoplay:true,
        fluidSpeed: true,
        autoplaySpeed: 6000,
        smartSpeed:3000,
        animateIn: 'fadeIn', animateOut: 'fadeOut',
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
    $('#mprevBtn').click(function() {
        mainCarous.trigger('next.owl.carousel',[3000]);
    })
    $('#mnextBtn').click(function() {
        mainCarous.trigger('prev.owl.carousel', [3000]);
    })


    let nat1 = $('#nat-carous1');
    let nat2 = $('#nat-carous2');
    let bird1 = $('#bird-carous1');
    
    // carousel slider
    nat1.owlCarousel({
        touchDrag  : false,
        mouseDrag  : false,
        loop:true,
        margin:10,
        nav:false,
        center:true,
        dots:false,
        autoplayTimeout: 10000,
        autoplay:true,
        fluidSpeed: true,
        autoplaySpeed: 6000,
        smartSpeed:3000,
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
    nat2.owlCarousel({
        touchDrag  : false,
        mouseDrag  : false,
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        center:true,
        dots:false,
        autoplayTimeout: 10000,
        autoplay:true,
        fluidSpeed: true,
        autoplaySpeed: 6000,
        smartSpeed:3000,
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
    bird1.owlCarousel({
        touchDrag  : false,
        mouseDrag  : false,
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        center:true,
        dots:false,
        autoplayTimeout: 10000,
        autoplay:true,
        fluidSpeed: true,
        autoplaySpeed: 6000,
        smartSpeed:3000,
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
    // control next and prev button sa carousel speed 3 sec
    $('#nextBtn-1').click(function() {
        nat1.trigger('next.owl.carousel',[3000]);
    })
    $('#prevBtn-1').click(function() {
        nat1.trigger('prev.owl.carousel', [3000]);
    })
    $('#nextBtn-2').click(function() {
        nat2.trigger('next.owl.carousel',[3000]);
    })
    $('#prevBtn-2').click(function() {
        nat2.trigger('prev.owl.carousel', [3000]);
    })

    $('#nextBirdBtn-1').click(function() {
        bird1.trigger('next.owl.carousel',[3000]);
    })
    $('#prevBirdBtn-1').click(function() {
        bird1.trigger('prev.owl.carousel', [3000]);
    })

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




    // let container = $('.container-img');
    // let cards = $('.card');
  
    // // Filter gallery based on category
    // $('#filter-menu').on('click', '.filter-item', function () {
    //   let selectedFilter = $(this).data('filter');
    //   let matchingCards;
  
    //   if (selectedFilter === 'all') {
    //     matchingCards = cards;
    //   } else {
    //     matchingCards = cards.filter(function () {
    //       let dataId = $(this).find('a').data('id').toLowerCase();
    //       return dataId === selectedFilter.toLowerCase();
    //     });
    //   }
  
    //   // Clear the container
    //   container.empty();
  
    //   // Append matching cards to the container with fadeIn animation
    //   matchingCards.each(function () {
    //     $(this).removeClass('fade-out').addClass('fade-in').appendTo(container).hide().fadeIn();
    //   });
  
    //   // Add fade-out class to non-matching cards and fade them out
    //   cards.not(matchingCards).each(function () {
    //     $(this).removeClass('fade-in').addClass('fade-out').fadeOut();
    //   });
    // });
      
})