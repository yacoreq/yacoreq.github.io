const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("[data-slides]");
let activeIndex = 0;
let timer;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        clearTimeout(timer);
        changeSlide(button.dataset.carouselButton === "next" ? 1 : -1);
        startTimer();
    });
});

function startTimer() {
    timer = setTimeout(() => {
        changeSlide(1);
        startTimer();
    }, 10000);
}

function changeSlide(offset) {
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
}

// Start the timer initially
startTimer();