
// IMAGE SLIDER

let slideIndex = 0; // creates a var called slide index that equals to 0. We are creating something like an array that we can start our images count in 0.

const showSlides = () => { // We are creating a function named showSlides!

    const slides = document.getElementsByClassName("img-slider"); // HTML Collection of DIV's --- Like an array!
    const dots = document.getElementsByClassName("dot");

    for (let i=0; i < slides.length; i++) { // We are looping through all the Html collection and display them as none!
        slides[i].style.display = "none";
    }

    slideIndex++; // Everytime we run the page make sure that we start at 0 and increments by 1. We need to make a condition so our number doesn't exceed the Html collection of 3! At this moment we are at position 1!

    if (slideIndex > slides.length) { // This is not true so doesn't run, I continues position 1!
      slideIndex = 1;
    }

    for (let i=0; i < dots.length; i++) {
        dots[i].style.background = "black";
    }

    slides[slideIndex - 1].style = "block"; // We access the 'array'slides and through there we say slidesIndex that is position 1 minus 1 = 0 (we access image position 0) set to block!
    dots[slideIndex - 1].style = "black";

    setTimeout (showSlides, 5000); // Grabs the function showSlides and runs 3s each time!


};

showSlides(); // In here we are calling the function showSlides



// SLIDE ABOUT PAGE UP AND DOWN

var aboutScreenEl =  document.getElementById('about');
var retrato = document.getElementsByClassName('.portrait-img');

function aboutClick () {
  aboutScreenEl.classList.toggle('active');

}

function arrowClick () {
  aboutScreenEl.classList.remove('active');
}



// POINTER CHANGING ON SLIDER
