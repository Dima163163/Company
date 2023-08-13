$(document).ready(function(){
  $('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '<div class="sprite-next"></div>',
		prevArrow: '<div class="sprite-prev"></div>',
		responsive: [
    {
			breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
      breakpoint: 480,
      settings: {
				centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
				centerPaging: 80,
      }
	}]
	});
});