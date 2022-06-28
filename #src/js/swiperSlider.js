if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.sliderSwiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.sliderProduction', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next-forw',
      prevEl: '.prev-back',
    },
  
    grabCursor: true,
    slidesPerView: 5,
    spaceBetween: 20,
    // autoplay: {
    //   delay: 3000,
    //   stopOnLastSlide: false,
    //   disableOnInteraction: false,
    // },
  });
}
