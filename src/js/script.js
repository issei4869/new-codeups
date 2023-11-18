//ページトップへ戻るボタン（スクロールして出てくるタイプ）
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
  
  // ハンバーガーメニュー
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

  // スライダー
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

  // リサイズ処理（PC時のみ矢印表示）
  const service_slideLength = document.querySelectorAll('.js-campaign-swiper .swiper-slide').length
  $(window).resize(function () {
      service_arrow();
  });
  service_arrow();
  function service_arrow() {
      if (window.matchMedia('(max-width: 767px)').matches || service_slideLength <= 3) {
          $('.js-service-arrow').hide();
      } else {
          $('.js-service-arrow').show();
      }
  }

  // Swiper
  var service_swiper = new Swiper(".js-campaign-swiper", {
      loop: true,
      speed: 2000,
      slidesPerView: 1.5,
      spaceBetween: 20,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
      },
      breakpoints: {
          768: {
              slidesPerView: 3.5,
              spaceBetween: 40
          }
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

});