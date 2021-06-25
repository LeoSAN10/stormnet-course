var slideIndex = 1;
var slide2Index = 1;
var slide3Index = 1;
var slide4Index = 1;
showSlides(slideIndex);
showSlides2(slide2Index);
showSlides3(slide3Index);
showSlides4(slide4Index);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide2(n) {
  showSlides2(slide2Index = n);
}

function currentSlide3(n) {
  showSlides3(slide3Index = n);
}
function currentSlide4(n) {
  showSlides4(slide4Index = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  if (n > slides2.length) {slide2Index = 1}
  if (n < 1) {slide2Index = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slide2Index-1].style.display = "block";
  dots[slide2Index-1].className += " active";
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