var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    
    
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 3,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });