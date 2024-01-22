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

    // Check if the clicked image has the class 'light-page'
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
      $(".main-navigation ul li a").addClass("text-dark");


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
      $(".main-navigation ul li a").removeClass("text-dark");
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

  //custom shape below slider
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
  
});
