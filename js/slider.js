const swiper = new Swiper('.swiper', {
  // Optional parameters
	slidesPerView: 4,
  spaceBetween: 10,
	loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.advantages-button-next',
    prevEl: '.advantages-button-prev',
  },
	breakpoints: {
		960: {
      slidesPerView: 3,
			spaceBetween: 50
    },
		640: {
      slidesPerView: 3,
			spaceBetween: 20
    },
		480: {
      slidesPerView: 1,
			spaceBetween: 80
    },
		320: {
      slidesPerView: 1,
			spaceBetween: 45
    },
  }
});