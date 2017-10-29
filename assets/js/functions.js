new WOW().init();

$(function(){
  // niceSelectFilter();
  activeCarousel();
})

// function area
function activeCarousel() {
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
    animateIn: 'fadeInUp',
    animateOut: 'fadeOutUp',
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
}
