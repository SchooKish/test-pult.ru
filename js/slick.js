$(function () {
  $(".main__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<div class="sprite-next"></div>',
    prevArrow: '<div class="sprite-prev"></div>',
    responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
