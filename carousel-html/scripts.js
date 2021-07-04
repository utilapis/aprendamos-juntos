let slideIndex = 1;
let previousIndex = -1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (previousIndex >= 0) {
    slides[previousIndex].style.display = "none";
    dots[previousIndex].classList.remove("active");
  }

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  previousIndex = slideIndex - 1;

  slides[previousIndex].style.display = "block";
  dots[previousIndex].classList.add("active");
}
