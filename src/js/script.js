/*****ページトップへ戻るボタン（スクロールして出てくるタイプ）*****/
var pagetop = $('#page-topbtn');
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    jQuery('.page-top').addClass( 'is-show' );
  } else {
    jQuery('.page-top').removeClass( 'is-show' );
  }
});

pagetop.click(function () {
  $('body, html').animate({ scrollTop: 0 }, 500);
  return false;
});


jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  
  /*****ハンバーガーメニュー*****/
  $(function () {
    $(".js-hamburger").on("click", function () {
        $(this).toggleClass("is-open");
        if ($(this).hasClass("is-open")) {
            openDrawer();
        } else {
            closeDrawer();
        }
    });

    // backgroundまたはページ内リンクをクリックで閉じる
    $(".js-drawer a[href]").on("click", function () {
        closeDrawer();
    });

    // resizeイベント
    $(window).on('resize', function() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            closeDrawer();
        }
    });
  });

  function openDrawer() {
    $(".js-drawer").fadeIn();
    $(".js-hamburger").addClass("is-open");
  }

  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
  }

  /*****MVスライダー*****/
  const mv_swiper = new Swiper(".js-mv-swiper", {
    loop: true,
    speed: 2000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // Campaignリサイズ処理（PC時のみ矢印表示）
  const service_slideLength = document.querySelectorAll('.js-campaign-swiper .swiper-slide').length
  $(window).resize(function () {
    service_arrow();
  });
  service_arrow();
  function service_arrow() {
    if (window.matchMedia('(max-width: 767px)').matches || service_slideLength <= 3) {
      $('.js-campaign-arrow').hide();
    } else {
      $('.js-campaign-arrow').show();
    }
  }

  /*****Campaignスライダー*****/
  var service_swiper = new Swiper(".js-campaign-swiper", {
    loop: true,
      speed: 2000,
      slidesPerView: 1.31,
      spaceBetween: 24,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3.96,
          spaceBetween: 39
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  /*****画像の出現アニメーション*****/
  //要素の取得とスピードの設定
  var box = $('.js-color'),
  speed = 700;  

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function(){
  $(this).append('<div class="color"></div>')
  var color = $(this).find($('.color')),
  image = $(this).find('img');
  var counter = 0;

  image.css('opacity','0');
  color.css('width','0%');
  //inviewを使って背景色が画面に現れたら処理をする
  color.on('inview', function(){
    if(counter == 0){
      $(this).delay(50).animate({'width':'100%'},speed,function(){
        image.css('opacity','1');
        $(this).css({'left':'0' , 'right':'auto'});
        $(this).animate({'width':'0%'},speed);
      })
      counter = 1;
    }
  });
  });
    

});

