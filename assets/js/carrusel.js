document.addEventListener("DOMContentLoaded", function() {
    var currentSlide = 0;
    var slides = document.querySelectorAll('.carousel-inner .item');
    var indicators = document.querySelectorAll('.carousel-indicators li');
  
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
  
    var prevButton = document.querySelector('.left.carousel-control');
    prevButton.addEventListener('click', function(e) {
      e.preventDefault();
      var newIndex = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(newIndex);
    });
  
    var nextButton = document.querySelector('.right.carousel-control');
    nextButton.addEventListener('click', function(e) {
      e.preventDefault();
      var newIndex = (currentSlide + 1) % slides.length;
      showSlide(newIndex);
    });
  
    // Automatizar el cambio de diapositivas
    var interval = setInterval(function() {
      var newIndex = (currentSlide + 1) % slides.length;
      showSlide(newIndex);
    }, 6000);
  
    // Pausar el carrusel al pasar el ratón sobre él
    var carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', function() {
      clearInterval(interval);
    });
  
    carousel.addEventListener('mouseleave', function() {
      interval = setInterval(function() {
        var newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
      }, 6000);
    });
  });
  