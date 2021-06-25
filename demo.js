
var slide4Index = 1;

showSlides4(slide4Index);

function currentSlide4(n) {
  showSlides4(slide4Index = n);
}


function showSlides4(n) {
  var i;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("dot");
  if (n > slides4.length) {slide4Index = 1}
  if (n < 1) {slide4Index = slides4.length}
  for (i = 0; i < slides4.length; i++) {
      slides4[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides4[slide4Index-1].style.display = "block";
  dots[slide4Index-1].className += " active";
}