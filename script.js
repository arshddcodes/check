const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

showSlide(currentIndex);


// video player functionality
