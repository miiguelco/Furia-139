
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

function logoClick() {
  aboutScreenEl.classList.remove('active');
}


// RESPONSIVE MENU

let burgerMenu = document.querySelector('.burguer-container');
let navLinks = document.querySelector('.menu-links');
let ulNavLinks = document.querySelector('.ul-navlinks');
let linksToHide = document.getElementsByTagName('li');
let barOne = document.querySelector('.bar1');
let barTwo = document.querySelector('.bar2');
let barThree = document.querySelector('.bar3');

function burgerClick() {

  if (barTwo.style.width === "25px") {

    // links visible
    linksToHide[0].style.display = "inline-block";
    linksToHide[1].style.display = "inline-block";
    linksToHide[2].style.display = "inline-block";

    // ul container width animation
    ulNavLinks.style.maxWidth = "280px";
    ulNavLinks.style.width = "265px";
    // bar one style to cross
    barOne.style.width = "40px";
    barOne.style.top = "25px";
    barOne.style.transform = "rotate(45deg)";
    // bar two style to cross
    barTwo.style.width = "0px";
    //bar three style to cross
    barThree.style.width = "40px";
    barThree.style.top = "3px";
    barThree.style.left = "11px";
    barThree.style.transform = "rotate(-45deg)";
 }
 else {
   // links hidden
   linksToHide[0].style.display = "none";
   linksToHide[1].style.display = "none";
   linksToHide[2].style.display = "none";
   // ul container width animation
   ulNavLinks.style.maxWidth = "0px";
   // bar one style to cross
   barOne.style.width = "25px";
   barOne.style.top = "13px";
   barOne.style.transform = "rotate(0deg)";
   // bar two style to cross
   barTwo.style.width = "25px";
   //bar three style to cross
   barThree.style.width = "25px";
   barThree.style.top = "13px";
   barThree.style.left = "12px";
   barThree.style.transform = "rotate(0deg)";
  }
}
