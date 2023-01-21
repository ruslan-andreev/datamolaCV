const links = document.querySelectorAll('.site-link')
//const continueBtn = document.getElementById('continue-button')
const HEADER_OFFSET = 66

links.forEach(element => {
    element.addEventListener('click', function(event){
    event.preventDefault()
        
    const sectionId = event.target.getAttribute('href').substr(1)

    const scrollToSection = document.getElementById(sectionId).offsetTop - HEADER_OFFSET
        
        window.scrollTo({
            top: scrollToSection,
            behavior: "smooth"
        })   
    })   
})


