const toggleNavBtn = document.getElementById('toogle-nav-btn')
const navContainer = document.querySelector('.nav__list')
const navBlur = document.querySelector('.header__nav')
const linkList = document.querySelectorAll('.nav-link')

console.log(navBlur)

toggleNavBtn.addEventListener('click',()=>{
    toggleNav(navContainer, toggleNavBtn, navBlur)
})
navBlur.addEventListener('click', ()=>{
    console.log('click header')
    toggleNav(navContainer, toggleNavBtn, navBlur)
})
linkList.forEach(element =>{
    element.addEventListener('click',()=>{
        console.log('click')
        toggleNav(navContainer, toggleNavBtn, navBlur)
    })
})
function toggleNav(navContainer, toggleNavBtn, navBlur){
    toggleNavBtn.classList.toggle('mobile-nav-button--active')
    navContainer.classList.toggle('nav__list--active')
    navBlur.classList.toggle('header__nav--active')
}