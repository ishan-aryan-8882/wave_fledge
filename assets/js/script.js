$(document).ready(function () {
  if (".sticky-header") {
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
    } else {
      $("body").addClass("dark-theme-page");
      $("body").removeClass("light-theme-page");
    }
  });

  //------------end----------------
});
