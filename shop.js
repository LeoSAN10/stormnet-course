
var slide3Index = 1;


showSlides3(slide3Index);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls


function currentSlide3(n) {
  showSlides3(slide3Index = n);
}



function showSlides3(n) {
  var i;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot");
  if (n > slides3.length) {slide3Index = 1}
  if (n < 1) {slide3Index = slides3.length}
  for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides3[slide3Index-1].style.display = "block";
  dots[slide3Index-1].className += " active";
}

