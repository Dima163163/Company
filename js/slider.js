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
		320: {
      slidesPerView: 1,
			spaceBetween: 80
    },
		480: {
      slidesPerView: 1,
			spaceBetween: 80
    },
		640: {
      slidesPerView: 3,
			spaceBetween: 20
    },
		960: {
      slidesPerView: 3,
			spaceBetween: 50
    },
  }
});