const track = document.querySelector('.witness-track');

let currentSlide = 0;
const totalSlide = 3;

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlide;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

},2000);