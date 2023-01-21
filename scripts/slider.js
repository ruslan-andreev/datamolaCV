new Swiper('.projects-swiper',{
    slidesPerView: 2,
    spaceBetween: 32,
    //centeredSlides: true,
    loop: true,
    
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  //Keyboard
  
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  //Mouse
  mouseWheel: {
    sensitivity: 1,
  },
  //Autoplay
  
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 1.33,
      centeredSlides: true,
      spaceBetween: 32,
    },
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 32,
    }
  }
})