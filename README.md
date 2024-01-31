# wave_fledge

git add .
git status
git commit -m "file save"
git push origin main


// Function to check if scrolled a certain number of pixels
function isScrolledPixels(scrollThreshold) {
  // Get the current scroll position
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Check if the scroll position is greater than or equal to the specified threshold
  return scrollPosition >= scrollThreshold;
}

// Example: Check if scrolled 200 pixels
var scrolled200Pixels = isScrolledPixels(200);

// Example usage
if (scrolled200Pixels) {
  // Do something when scrolled 200 pixels
  console.log('Scrolled 200 pixels or more!');
}
