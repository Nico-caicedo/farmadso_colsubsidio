document.addEventListener("DOMContentLoaded", function() {
    var currentSlide = 0;
var slides = document.querySelectorAll('.carousel-innero .itemo');
var indicators = document.querySelectorAll('.carousel-indicatorso li');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
  currentSlide = index;
}

indicators.forEach(function(indicator, index) {
  indicator.addEventListener('click', function() {
    showSlide(index);
  });
});

var prevButton = document.querySelector('.left.carousel-controlo');
prevButton.addEventListener('click', function(e) {
  e.preventDefault();
  var newIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(newIndex);
});

var nextButton = document.querySelector('.right.carousel-controlo');
nextButton.addEventListener('click', function(e) {
  e.preventDefault();
  var newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
});

// Automatizar el cambio de diapositivas
var interval = setInterval(function() {
  var newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
}, 2000);

// Pausar el carrusel al pasar el ratón sobre él
var carousel = document.querySelector('.carouselo');
carousel.addEventListener('mouseentero', function() {
  clearInterval(interval);
});

carousel.addEventListener('mouseleaveo', function() {
  interval = setInterval(function() {
    var newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  }, 2000);
});   

});