$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
    });
$('.header__burger').on('click',function(){
  $('.contacts').toggleClass('contacts--open')
});
$('.bar').on('click',function(){
  $(this).find('.bar__items').toggleClass('bar__items--open')
});
$('.menu__button').on('click', function(){
  $(this).parent().find('.menu__item[data-hide]').toggleClass('menu__item--hide');
})
})