$(document).ready(function () {
  //wow js init
  new WOW().init();

  //header language selection
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
      $(".footer-curve").addClass("white-bg");
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
      $(".footer-curve").removeClass("white-bg");

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
  function borderHeader() {
    let homeCarousel = $(".arrow-trigger");
    let homeCarouselRect1 = homeCarousel[0].getBoundingClientRect();
    console.log(homeCarouselRect1.top);
    // 872
    if (homeCarouselRect1.top < 0) {
      $(".sticky-header").addClass("border-bottom-custom");
      gsap.from(".arrow-progress-tracker", {
        scale: 1,
        opcity: 1,
      });
    } else {
      $(".sticky-header").removeClass("border-bottom-custom");
      gsap.to(".arrow-progress-tracker", {
        scale: 0,
        opcity: 0,
      });
    }
  }
  borderHeader();
  $(window).scroll(function () {
    borderHeader();
  });
  //------------end----------------

  //custom card counter
  if($('.hp-cards').length){
    function startCounter(targetNumber, counterElement) {
      let count = 0;
  
      function updateCounter() {
        let remainingDifference = targetNumber - count;
        let randomIncrement = Math.min(
          Math.floor(Math.random() * 10) + 1,
          remainingDifference
        );
  
        count += randomIncrement;
        $(counterElement).text(count);
  
        if (count >= targetNumber) {
          clearInterval(counterInterval);
        }
      }
  
      var counterInterval;
  
      // Options for the Intersection Observer
      const options = {
        threshold: 0.5, // Trigger when 50% of the element is in view
      };
  
      // Callback function for the Intersection Observer
      function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the counter when the section is in view
            counterInterval = setInterval(updateCounter, 1);
            observer.disconnect(); // Disconnect the observer once started
          }
        });
      }
  
      // Create the Intersection Observer
      const observer = new IntersectionObserver(handleIntersection, options);
  
      // Observe the target element
      observer.observe(counterElement);
    }
    let counterElements = $(".counter-cc");
    counterElements.each(function () {
      let targetNumber = $(this).data("target");
      startCounter(targetNumber, this);
    });
  }
  //------------end----------------

  // for projects page
  if($(".banner-projects").length){
    function startCounter(targetNumber, counterElement) {
      let count = 0;
  
      function updateCounter() {
        let remainingDifference = targetNumber - count;
        let randomIncrement = Math.min(
          Math.floor(Math.random() * 10) + 1,
          remainingDifference
        );
  
        count += randomIncrement;
        $(counterElement).text(count);
  
        if (count >= targetNumber) {
          clearInterval(counterInterval);
        }
      }
  
      var counterInterval;
  
      // Options for the Intersection Observer
      const options = {
        threshold: 0.5, // Trigger when 50% of the element is in view
      };
  
      // Callback function for the Intersection Observer
      function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the counter when the section is in view
            counterInterval = setInterval(updateCounter, 30);
            observer.disconnect(); // Disconnect the observer once started
          }
        });
      }
  
      // Create the Intersection Observer
      const observer = new IntersectionObserver(handleIntersection, options);
  
      // Observe the target element
      observer.observe(counterElement);
    }
    let counterElements = $(".counter-cc");
    counterElements.each(function () {
      let targetNumber = $(this).data("target");
      startCounter(targetNumber, this);
    });
  }

  //button in view animation read more
  const $element = $("#myElement");
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      $element.addClass("active");
    } else {
      $element.removeClass("active");
    }
  });
  observer.observe($element[0]);
  //------------end---------------

  //noticable clients carousel
  $(".clients-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    },
    loop: true,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
  });
  //------------end---------------

  //--------------------------ending parenthesis-------------------------------------------------------------//
});

//change the image of the expertise rotating ring
$(document).ready(function() {
  const imgElement = $('.setting-img img');

  function updateImageSrc() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 577) {
      imgElement.attr('src', 'assets/images/service/setting.svg');
    } else {
      imgElement.attr('src', 'assets/images/service/setting2.png');
    }
  }

  $(window).resize(updateImageSrc);
  updateImageSrc();
});

