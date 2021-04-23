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
})