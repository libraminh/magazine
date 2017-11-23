new WOW().init();

$(function(){
  // niceSelectFilter();
  activeCarousel();
  faqList();
  openSubMenu();

  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
  })

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
    asNavFor: '.gallery-slick',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 9,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 6,
        }
      }
    ]
  });

  $('.gallery-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    dots: false,
    asNavFor: '.gallery-control'
  });

  if($(window).width() > 768) {
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

      $(function() {
        $(".wrap-video-list").niceScroll({
          cursorcolor:"#555555",
          cursorwidth: '5px',
          cursorborder: '0px',
          zindex: 10,
          scrollspeed: 100
        });
      });
  }


})

// function area
function openSubMenu() {
  var navLink = $('.navbar-nav a'),
      subMenu = '.sub-menu',
      linkSubMenu = $('.sub-menu a'),
      subMenuSub = '.sub-menu-sub';

  if($(window).width() < 992) {
    navLink.on('click', function(){
      $(this).parent().find(subMenu).slideToggle();
    })

    linkSubMenu.on('click', function(){
      $(this).parent().find(subMenuSub).slideToggle();
    })
  }
}

function faqList() {
  var faqBox = $('.faq-box a');
  var faqIcon = '.faq-icon';

  faqBox.on('click', function(){
      let $this = $(this);

      $this.parent().siblings(faqIcon).toggleClass('fa-plus');
      $this.parent().siblings(faqIcon).toggleClass('fa-minus');
  })

  $(faqIcon).on('click', function(){
    let $this = $(this);

    $this.toggleClass('fa-plus');
    $this.toggleClass('fa-minus');
  })
}

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
    nav: false,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:3,
      },
      768:{
          margin: 10,
          items:3,
      },
      1000:{
          items:3,
          dots: false,
      },
    }
  });

  $('.single-post7-carousel-control').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: false,
    dots: false,
    center: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:3,
      },
      768:{
          margin: 10,
          items:3,
      },
      1000:{
          items:5,
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
          stagePadding: 0,
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
    autoplay:  true,
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
    margin: 30,
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
          margin: 30,
          items:1,
      },
      1000:{
          items:2,
          stagePadding: 0,
          margin: 10,
      },
      1400:{
          items:4,
          stagePadding: 150,
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
      992: {
          margin: 10,
          items:3,
      },
      1120: {
          margin: 10,
          items:3,
      },
      1300:{
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
