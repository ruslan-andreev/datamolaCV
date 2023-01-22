const prevSlideBtn = document.querySelector('.slider-btn--prev');
const nextSlideBtn = document.querySelector('.slider-btn--next');
const slideList = document.querySelectorAll('.pet-project__item');

prevSlideBtn.addEventListener('click', ()=>{
    prevSlide();
})
nextSlideBtn.addEventListener('click', ()=>{
    nextSlide();
})

function nextSlide(){
    let slideItem = slideList[0];
    let marginLeft = !slideItem.style.marginLeft ? 0 : Math.abs(parseInt(slideItem.style.marginLeft));
    marginLeft = marginLeft + 100;
    if(marginLeft < slideList.length * 100){
        slideItem.style.marginLeft = `-${marginLeft}%`;
    }
}

function prevSlide(){
    let slideItem = slideList[0];
    let marginLeft = !slideItem.style.marginLeft ? 0 : Math.abs(parseInt(slideItem.style.marginLeft));
    marginLeft = marginLeft - 100;
    if(marginLeft >= 0){
        slideItem.style.marginLeft = `-${marginLeft}%`;
    }
}
