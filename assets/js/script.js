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
      $(".sticky-header").removeClass("dark-theme-page").addClass("light-theme-page");
      $(".dropdown button").addClass('color-gray-imp');
    } else {
      $("body").addClass("dark-theme-page");
      $("body").removeClass("light-theme-page");
      $(".click-shy h6 a").removeClass("text-secondary");
      $(".sticky-header")
        .removeClass("light-theme-page")
        .addClass("dark-theme-page");
    }
  });
  //------------end----------------

  //home page carousel
  if ($('.home-page-carousel').length) {
    $('.home-video-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      items: 1,
      dots: false,
      autoplayTimeout: 500,
      onInitialized: function (event) {
       setTimeout(()=>{
        $(".home-video-carousel").trigger("stop.owl.autoplay");
       },1000)
      }
    });
  }  
  //------------end----------------

});
