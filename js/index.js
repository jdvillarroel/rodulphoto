const heroImg = document.querySelector('.hero-img');
const imgContainer = document.querySelector('.hero-img-container');

const slideShowImgs = [
    "./assets/images/Fall-Colors.jpg",
    "./assets/images/Lake-Travis.jpg",
    "./assets/images/Rain-Glass.jpg",
    "./assets/images/Sun-Beams.jpg",    
    "./assets/images/Trees.jpg",
    "./assets/images/Sunset-Light.jpg"
];

let index = 0;

heroImg.addEventListener('animationend', () => {
    heroImg.classList.remove('hero-animation');
});

function slideShow() {
    heroImg.classList.add('hero-animation');
    heroImg.src = slideShowImgs[index];
    
    
    index++;

    if (index == slideShowImgs.length)
        index = 0;
}

setInterval(slideShow, 4000);
