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




$(document).ready(function() {
  let $check = $('#js-checkbox');
  let $submit = $('#js-submit-button');
  
  // 初期状態ではチェックボックスを無効化
  $check.prop('disabled', true);
  
  // 入力フィールドの変更を監視
  $('#js-name, #js-ruby').on('input', function() {
    // 入力フィールドが空でない場合
    if ($('#js-name').val() !== '' && $('#js-ruby').val() !== '') {
      // チェックボックスを操作可能にする
      $check.prop('disabled', false);
    } else {
      // チェックボックスを操作不可にし、チェックを外す
      $check.prop('disabled', true);
      $check.prop('checked', false);
      // 送信ボタンを無効化
      $submit.prop('disabled', true);
    }
  });
  
  // チェックボックスのクリックを監視
  $check.on('click', function() {
    if ($(this).prop('checked')) {
      // 送信ボタンを有効化
      $submit.prop('disabled', false);
    } else {
      // 送信ボタンを無効化
      $submit.prop('disabled', true);
    }
  });
});
