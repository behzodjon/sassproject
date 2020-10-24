$('.slider').slick({
  arrows: true,
  dots:true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: true,
  prevArrow:"<img class='a-left control-c prev slick-prev' src='/assets/transparent/left.svg'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='/assets/transparent/right.svg'>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
