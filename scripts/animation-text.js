const header = document.querySelector('.heading-primary')
const continueBtn = document.querySelector('.continue-button')   
window.onload = setTimeout(()=>{
    textanimation(continueBtnAnimation)
    
}, 500)
function textanimation(continueBtnAnimatio){
    header.classList.add('heading-primary--active')
    setTimeout(()=>{
        continueBtnAnimatio()
    }, 1200)
    
}
function continueBtnAnimation(){
    continueBtn.classList.add('continue-button--active')
}
continueBtn.addEventListener('click', ()=> {
    const HEADER_OFFSET = 70
    const scrollToSectionAbout = document.getElementById('about').offsetTop - HEADER_OFFSET
       
        window.scrollTo({
            top: scrollToSectionAbout,
            behavior: "smooth"
        })   
    }  
)