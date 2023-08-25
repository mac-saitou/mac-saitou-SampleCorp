$(document).ready(function() {
    $('.drawer').drawer();
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if (index < 6) {
          return '<span class="' + className + '"></span>';
        }
      },
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
      }
    }
  });

  $('a[href^="#"]').on('click', function(){
  let id = $(this).attr('href');
  let position = 0;
  if( id !== '#'){
    position = $(id).offset().top;
  }
  $('html,body').animate({
    scrollTop: position
  },300
  );
});

$(window).on('scroll', function(){
  if(780 < $(this).scrollTop()){
    $('.to-top').addClass('is-show');
  }else{
    $('.to-top').removeClass('is-show');
  }
});

$('.faqs-box').on('click', function(){
  $(this).children('.faqs-answer').slideToggle();
  $(this).children('.faqs-question').toggleClass('is-open');
});
