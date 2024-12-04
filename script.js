const sliderLine = document.querySelector(' .slider_line');
const images = document.querySelectorALL('.slider_img');

const nextButton = document.querySelector('.button-next');
const prevButton = document.querySelector('.button-prev');

let count = 0;
let width;

function init () {
 width = document.querySelector('.slider_block').offsetWidth;
 sliderLine.style.width = `${width * image.length}px`;
 image.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';

});
 rollSlider();
}

init();
window.addEventListener('resize', init);

function rollSlider() {
    sliderLine.style.transform = 'translate(-'+ count * width + 'px';
}

function sliderNext() {
    count++;
    if (count>=image.length){
        count = 0;
    }
    rollSlider();
}

if(nextButton  !==null) nextButton.addEventListener('click', sliderNext)

function sliderPrev(){
     count--;
     if (count < 0 ) {
        count = image.length -1;
      
     }
     rollSlider();
}

if (prevButton !== null) prevButton.addEventListener("click", sliderPrev);
