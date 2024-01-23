$(document).ready(function () {
  if ($(".sticky-header").length) {
    // language selector
    $(".dropdown-item").on("click", function () {
      $(".dropdown-toggle").html($(this).text());
    });
  }
  //------------end----------------

  //mode toggle
  let darkToggle = $("img.light-page");
  let lightToggle = $("img.dark-page");
  $(".dark-light-mode img").on("click", function () {
    $(".dark-light-mode img").not($(this)).removeClass("dn-class");
    $(this).addClass("dn-class");

    if ($(this).hasClass("light-page")) {
      $("body").addClass("light-theme-page");
      $("body").removeClass("dark-theme-page");
      $(".click-shy h6 a").addClass("text-secondary");
      $(".sticky-header")
        .removeClass("dark-theme-page")
        .addClass("light-theme-page");
      $(".dropdown button").addClass("color-gray-imp");
      $(".theme-ded").addClass("theme-ded-light");
      $(".home-carousel-absolute-text-box p").addClass("gray-text-custom");
      $(".home-carousel-absolute-text-box h2").addClass("gray-text-custom");
      $(".home-carousel-absolute-text-box a").addClass("gray-text-custom");
      $(".slider-below-show-bg").addClass("invert-color");
      $(".main-navigation").addClass("white-bg");
      $(".main-navigation ul li a").addClass("gray-text-custom");
      //page progress bar
      $(".arrow-progress-tracker .fa-solid.fa-arrow-up").addClass(
        "light-theme-page"
      );
      let scrollPercentage = () => {
        let scrollProgress = $(".arrow-progress-tracker");
        let pos = $(window).scrollTop();
        let calcHeight = $(document).outerHeight() - $(window).outerHeight();
        let scrollValue = Math.round((pos * 100) / calcHeight);
        scrollProgress.css(
          "background",
          `conic-gradient(#df7e36 ${scrollValue}%,#E3E3E2 ${scrollValue}%)`
        );
      };
      scrollPercentage();
      $(window).scroll(function () {
        scrollPercentage();
      });
    } else {
      $("body").addClass("dark-theme-page");
      $("body").removeClass("light-theme-page");
      $(".click-shy h6 a").removeClass("text-secondary");
      $(".sticky-header")
        .removeClass("light-theme-page")
        .addClass("dark-theme-page");
      $(".theme-ded").removeClass("theme-ded-light");
      $(".home-carousel-absolute-text-box p").removeClass("gray-text-custom");
      $(".home-carousel-absolute-text-box h2").removeClass("gray-text-custom");
      $(".home-carousel-absolute-text-box a").removeClass("gray-text-custom");
      $(".slider-below-show-bg").removeClass("invert-color");
      $(".main-navigation").removeClass("white-bg");
      $(".main-navigation ul li a").removeClass("gray-text-custom");
      //page progress bar
      $(".arrow-progress-tracker .fa-solid.fa-arrow-up").removeClass(
        "light-theme-page"
      );
      let scrollPercentage = () => {
        let scrollProgress = $(".arrow-progress-tracker");
        let pos = $(window).scrollTop();
        let calcHeight = $(document).outerHeight() - $(window).outerHeight();
        let scrollValue = Math.round((pos * 100) / calcHeight);
        scrollProgress.css(
          "background",
          `conic-gradient(#df7e36 ${scrollValue}%,var(--bgColor) ${scrollValue}%)`
        );
      };
      scrollPercentage();
      $(window).scroll(function () {
        scrollPercentage();
      });
    }
  });
  //------------end----------------

  //home page carousel
  $(".home-video-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });
  setTimeout(function () {
    $(".home-video-carousel").trigger("stop.owl.autoplay");
  }, 3000);
  //------------end----------------

  //custom shape below slider text animation
  $(".slider-below-show").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    dots: false,
    autoplayTimeout: 2000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    mouseDrag: false,
  });
  //------------end----------------

  //page progress bar
  let scrollPercentage = () => {
    let scrollProgress = $(".arrow-progress-tracker");
    let pos = $(window).scrollTop();
    let calcHeight = $(document).outerHeight() - $(window).outerHeight();
    let scrollValue = Math.round((pos * 100) / calcHeight);
    scrollProgress.css(
      "background",
      `conic-gradient(#df7e36 ${scrollValue}%,var(--bgColor)  ${scrollValue}%)`
    );
  };
  scrollPercentage();
  $(window).scroll(function () {
    scrollPercentage();
  });
  //------------end----------------

  // sticky nav top border and scroll progress visiblity
  function borderHeader(){
  let homeCarousel = $('.home-page-carousel');
  let homeCarouselRect1 = homeCarousel[0].getBoundingClientRect()
  // console.log(homeCarouselRect1.top);
  // 872
  if(homeCarouselRect1.top < 0){
    $('.sticky-header').addClass('border-bottom-custom')
    gsap.from('.arrow-progress-tracker',{
      scale:1,
      opcity:2,
  })
  }
  else{
    $('.sticky-header').removeClass('border-bottom-custom')
    gsap.to('.arrow-progress-tracker',{
      scale:0,
      opcity:0,
  })
  }
  }
  borderHeader();
  $(window).scroll(function () {
    borderHeader();
  });
  //------------end----------------

});
