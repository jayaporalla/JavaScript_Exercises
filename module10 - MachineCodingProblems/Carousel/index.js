const slides = document.querySelectorAll(".carousel");
const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");

const length = slides.length - 1;
let currentSlide = 0;

slides.forEach((image, index) => (image.style.transform = `translateX(${index * 100}%)`))

function handleNextButton(){
    if(currentSlide === length){
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slides.forEach((image, index) => (image.style.transform = `translateX(${(index - currentSlide) * 100}%)`))
}

function handlePreviousButton(){
    if(currentSlide === 0){
        currentSlide = length;
    } else {
        currentSlide--;
    }
    slides.forEach((image, index) => (image.style.transform = `translateX(${(index - currentSlide) * 100}%)`))
}

nextButton.addEventListener("click", handleNextButton);
prevButton.addEventListener("click", handlePreviousButton);