// const track = document.querySelector('.carousel__track');
// console.log(track);
// const slides = Array.from('carousel__track.children');
// const nextButton = document.querySelector('.carousel_button--right');
// const prevButton = document.querySelector('.carousel_button--left');
// const dotsNav = document.querySelector('.carousel__nav');
// // const dots = Array.from(dotsNav.children);
//
//
// const slideWidth = slides[0].getBoundingClientRect().width;
//
// //slide next to each otejr
// // slides[0].style.left = slideWidth * 0 + 'px';
// // slides[1].style.left = slideWidth * 1 + 'px';
// // slides[2].style.left = slideWidth * 2 + 'px';
// // slides[3].style.left = slideWidth * 3 + 'px';
// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + 'px';
// };
// slides.forEach(setSlidePosition);
//
// /////when click left
//
//
// //click right = right
// nextButton.addEventListener('click', e => {
//   const currentSlide = track.querySelector('.current-slide');
//   const nextSlide = currentSlide.nextElementSibling;
//   const amountToMove = nextSlide.style.left;
//   //move to the next slide
//   track.style.transform = 'translateX(-' + amountToMove + ')';
//   currentSlide.classList.remove('current-slide');
//   nextSlide.classList.add('current-slide');
//
// })
//
// ///nav keep up



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  slides[slideIndex - 1].style.display = "block";

}