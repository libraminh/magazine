new WOW().init();

$(function(){
  // niceSelectFilter();
  activeCarousel();

  $('.author-select').niceSelect();

  $(".gallery-control").slick({
    infinite: true,
    dots: false,
    arrows: false,
    vertical: true,
    centerMode: false,
    slidesToShow: 8,
    slidesToScroll: 4,
    verticalSwiping: true,
    focusOnSelect: true,
    asNavFor: '.gallery-slick'
  });

  $('.gallery-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    dots: false,
    asNavFor: '.gallery-control'
  });

  $(function() {
    $(".home2-page").niceScroll({
      cursorcolor:"#c26dc9",
      cursorwidth: '10px',
      cursorborder: '0px',
      zindex: 10,
      scrollspeed: 100
    });
  });

  $(function() {
    $(".home3-page").niceScroll({
      cursorcolor:"#ff3249",
      cursorwidth: '10px',
      cursorborder: '0px',
      zindex: 10,
      scrollspeed: 100
    });
  });

  $(function() {
    $(".accent-2-scroll").niceScroll({
      cursorcolor:"#51aff7",
      cursorwidth: '10px',
      cursorborder: '0px',
      zindex: 10,
      scrollspeed: 100
    });
  });

  $(function() {
    $(".home5-page").niceScroll({
      cursorcolor:"#ffb10a",
      cursorwidth: '10px',
      cursorborder: '0px',
      zindex: 10,
      scrollspeed: 100
    });
  });

})

// function area
function activeCarousel() {
  $('.carousel-none').owlCarousel({
    items: 1,
    margin: 1,
    loop: true,
    nav: false,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

  });

  $('.carousel-nav').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 40,
    stagePadding: 250,
    loop: true,
    nav: false,
    dots: false,
    center: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          stagePadding: 50,
          items:1,
      },
      1000:{
          items:6,
          dots: false,
      },
    }
  });

  $('.single-post-carousel').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    URLhashListener:true,
    startPosition: 'URLHash'
  });

  $('.single-post-carousel-control').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:3,
          dots: false,
      },
    }
  });

  $('.carousel-destination').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 1,
    loop: true,
    nav: true,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          stagePadding: 50,
          items:1,
      },
      1000:{
          items:4,
          margin: 30,
          dots: false,
      },
    }
  });

  $('.carousel-adcontent').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 1,
    loop: true,
    nav: true,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          stagePadding: 50,
          items:1,
      },
      1000:{
          items:6,
          margin: 30,
          dots: false,
      },
    }
  });

  $('.carousel-1').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 1,
    loop: true,
    nav: true,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          stagePadding: 50,
          items:1,
      },
      1000:{
          items:3,
          dots: false,
      },
    }
  });

  $('.carousel-2').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 40,
    stagePadding: 250,
    loop: true,
    nav: false,
    dots: false,
    center: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          stagePadding: 50,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-3').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    animateIn: 'slideInUp',
    animateOut: 'slideOutUp',
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-4').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 1,
    loop: true,
    nav: true,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          stagePadding: 50,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-5').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    margin: 1,
    loop: true,
    nav: true,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          stagePadding: 50,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-6').owlCarousel({
    items: 1,
    // autoplay: true,
    autoplayTimeout: 6000,
    stagePadding: 180,
    margin: 100,
    loop: true,
    nav: false,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          stagePadding: 50,
          items:1,
      },
      1000:{
          items:4,
          dots: false,
      },
    }
  });

  $('.carousel-7').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 10,
    loop: true,
    nav: false,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-8').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-9').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-10').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 20,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:4,
          dots: false,
      },
    }
  });

  $('.carousel-11').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-12').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });

  $('.carousel-13').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 10,
    loop: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1,
        stagePadding: 0,
      },
      768:{
          margin: 10,
          items:1,
      },
      1000:{
          items:1,
          dots: false,
      },
    }
  });
}
