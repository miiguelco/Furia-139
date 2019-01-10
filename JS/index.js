
// IMAGE SLIDER SECTION

let slides = document.getElementsByClassName('img-slider'); // selects all images
let leftSideArrow = document.querySelector('.arrow-left'); // Select left side div of arrow area
let rightSideArrow = document.querySelector('.arrow-right'); // Select right side div of arrow area
let current = 0; // Represents the image we are on, and it's 0 by default

// Clears all images
function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}

// Initializes the slider, after reseting the images and calls the first one.
function strartSlide() {
  reset();
  slides[0].style.display = 'block';
}

// Show previous image
function slideLeft() {
  reset();
  slides[current - 1].style.display = 'block';
  current--;
}

// Show next image
function slideRight() {
  reset();
  slides[current + 1].style.display = 'block';
  current++;
}

// Left arrow click event
leftSideArrow.addEventListener('click', function () {
  if (current === 0) {
    current = slides.length;
  }
  slideLeft();
});

// Right arrow click event
rightSideArrow.addEventListener('click', function () {
  if (current === slides.length - 1) {
    current = -1;
  }
  slideRight();
});

strartSlide();



// ABOUT PAGE SLIDE UP AND DOWN

var aboutScreenEl =  document.getElementById('about');
var retrato = document.getElementsByClassName('.portrait-img');

function aboutClick() {
  aboutScreenEl.classList.toggle('active');

}

function arrowClick() {
  aboutScreenEl.classList.remove('active');
}
