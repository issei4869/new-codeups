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
      // 現在のbodyタグのoverflowスタイルを確認
      if ($("body").css("overflow") === "hidden") {

        // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
        $("body").css({ height: "", overflow: "" });

      } else {
        
        // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
        $("body").css({ height: "100%", overflow: "hidden" });

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
      slidesPerView: 1.27,
      spaceBetween: 24,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3.485,
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

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
//   $(function() {
//     let pageHash = location.hash;
//     if (pageHash) {
//         let scrollToElement = $('[data-id="' + pageHash + '"]');
//         if (!scrollToElement.length) return;
        
//         $(window).on('load', function() {
//             history.replaceState('', '', './');
//             let locationOffset = scrollToElement.offset().top;
//             let navigationBarHeight = $('.header').innerHeight();
//             locationOffset = locationOffset - navigationBarHeight;

//             // Microsoft Edge向けの修正
//             document.documentElement.scrollTop = locationOffset;
//             document.body.scrollTop = locationOffset;

//             // 兼容性のある書き方
//             // document.documentElement.scrollTop = locationOffset;
//             // document.body.scrollTop = locationOffset;

//             //アニメーションを追加する場合
//             // $('html, body').animate({
//             //     scrollTop: locationOffset
//             // }, 300, 'swing');
//         });
//     }
// });


  // $(function() {
  //     $('a[href*="#"]').on('click', function() {
  //         const scrollSpeed = 400;
  //         const navigationHeight = $(".header").innerHeight();
  //         const scrollToTarget = $(this.hash === '#' || '' ? 'html' : this.hash)
  //         if (!scrollToTarget.length) return;
  //         const scrollPosition = scrollToTarget.offset().top - navigationHeight;
  //         $('html, body').animate({
  //             scrollTop: scrollPosition
  //         }, scrollSpeed, 'swing');
  //         return false;
  //     });
  // });

  // $(document).on('click', 'a[href*="#"]', function () {
  //   let time = 400;
  //   let header = $('header').innerHeight();
  //   let target = $(this.hash);
  //   if (!target.length) return;
  //   let targetY = target.offset().top - header;
  //   $('html,body').animate({ scrollTop: targetY }, time, 'swing');
  //   return false;
  // });

  // $(document).on('click', 'a[href*="#"]', function (e) {
  //   e.preventDefault(); // Prevent default anchor click behavior
  
  //   let time = 400;
  //   let headerHeight = $('header').innerHeight();
  //   let href = $.attr(this, 'href');
  //   let pageUrl = href.split('#')[0];
  //   let hash = href.substring(href.indexOf('#'));
  
  //   // Check if the target is on the current page
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
  //     let target = $(hash);
  //     target = target.length ? target : $('[name=' + hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top - headerHeight
  //       }, time, 'swing');
  //       return false;
  //     }
  //   } else {
  //     // If the target is on a different page, navigate to that page first
  //     window.location = pageUrl + hash;
  //   }
  // });
  // $(function(){
  //   //現在のページURLのハッシュ部分を取得
  //   const hash = location.href;
  //   let header = $('header').innerHeight();
  //   //ハッシュ部分がある場合の条件分岐
  //   if(hash){
  //     //ページ遷移後のスクロール位置指定
  //     $("html, body").stop().scrollTop(0);
  //     //処理を遅らせる
  //     setTimeout(function(){
  //       //リンク先を取得
  //       const target = $(hash),
  //       //リンク先までの距離を取得
  //       position = target.offset().top - header;
  //       //指定の場所までスムーススクロール
  //       $("html, body").animate({scrollTop:position}, 500, "swing");
  //     });
  //   }
  // });

  //別ページのリンククリックによるスムーススクロール
  $(function() {
    let pageHash = window.location.hash;
    if (pageHash) {
      let scrollToElement = $('[data-id="' + pageHash + '"]');
      if (!scrollToElement.length) return;
      $(window).on('load', function() {
        history.replaceState('', '', './');
        let locationOffset = scrollToElement.offset().top;
        let navigationBarHeight = $('.header').innerHeight();
        locationOffset = locationOffset - navigationBarHeight;
        $('html, body').animate({
            scrollTop: locationOffset
        }, 300, 'swing');
      });
    }
  });

  //同ページのリンククリックによるスムーススクロール
  $(function() {
    $('a[href*="#"]').on('click', function() {
      const scrollSpeed = 400;
      const navigationHeight = $(".header").innerHeight();
      const scrollToTarget = $(this.hash === '#' || '' ? 'html' : this.hash)
      if (!scrollToTarget.length) return;
      const scrollPosition = scrollToTarget.offset().top - navigationHeight;
      $('html, body').animate({
          scrollTop: scrollPosition
      }, scrollSpeed, 'swing');
      return false;
    });
  });

  //Informationページのリンククリックによる同ページスムーススクロール
  $(function() {
    $('a[href*="information.html#"]').on('click', function() {
      const scrollSpeed = 400;
        let scrollToElement = $('[data-id="' + this.hash + '"]');
        if (!scrollToElement.length) return;
          let locationOffset = scrollToElement.offset().top;
          let navigationBarHeight = $('.header').innerHeight();
          locationOffset = locationOffset - navigationBarHeight;
          $('html, body').animate({
              scrollTop: locationOffset
          }, 300, 'swing');
    });
  });

  /*****Tab切り替え*****/
  $('.js-tab-menu').on('click', function () {
    $('.js-tab-menu').removeClass('is-active');
    $('.js-tab-content').removeClass('is-active');
    $(this).addClass('is-active');
    var number = $(this).data("number");
    $('#' + number).addClass('is-active');
  });


  $('.js-footer-menu, .js-drawer-menu').on('click', function () {
    var number = $(this).data("number");
    $('.js-tab-menu[data-number="' + number + '"]').click();
  });

  $(document).ready(function() {
    var hash = window.location.hash.substring(1); // Get the hash, removing the '#'
    if(hash) {
      $('.js-tab-menu[data-number="' + hash + '"]').click();
    }
  });


  // $('.js-footer-menu').on('click', function () {
  //   $('.js-tab-menu').removeClass('is-active');
  //   $('.js-tab-content').removeClass('is-active');
  //   $(this).addClass('is-active');
  //   var number = $(this).data("number");
  //   $('#' + number).addClass('is-active');
  // });

  // $(function () {
  //   //タブの実装
  //   $(".js-tab-menu").click(function () {
  //       var index = $(".js-tab-menu").index(this);
  //       $('.js-tab-menu').removeClass('is-active');
  //       $('.js-tab-content').removeClass('is-active');
  //       $(this).addClass("active");
  //       $(".js-tab-content").eq(index).addClass("active");
  //   });
  // });

  // $(function () {
  //   //タブへダイレクトリンクの実装
  //   //リンクからハッシュを取得
  //   var hash = location.hash;
  //   hash = (hash.match(/^#tab_panel-\d+$/) || [])[0];

  //   //リンクにハッシュが入っていればtabnameに格納
  //   if ($(hash).length) {
  //       var tabname = hash.slice(1);
  //   } else {
  //       var tabname = "tab_panel-1";
  //   }

  //   //コンテンツ非表示・タブを非アクティブ
  //   $(".js-tab-menu").removeClass("active");
  //   $(".js-tab-content").removeClass("active");

  //   //何番目のタブかを格納
  //   var tabno = $(".js-tab-content" + tabname).index();

  //   //コンテンツ表示
  //   $(".js-tab-menu").eq(tabno).addClass("active");

  //   //タブのアクティブ化
  //   $(".js-tab-content").eq(tabno).addClass("active");
  // });
  
  /*****トグルリスト*****/
  $('.js-toggle-question').on('click', function () {
    $(this).nextAll().slideToggle();
    $(this).toggleClass('is-open');
  });
  
  /*****アコーディオン*****/
  $('.js-faq-question').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('is-open');
  });

});

// ギャラリー画像モーダル表示イベント
$(".js-gallery-list__item img").click(function () {
  // まず、クリックした画像の HTML(<img>タグ全体)を#frayDisplay内にコピー
  $("#grayDisplay").html($(this).prop("outerHTML"));
  //そして、fadeInで表示する。
  $("#grayDisplay").fadeIn(200);


  return false;
});

// コース画像モーダル非表示イベント
// モーダル画像背景 または 拡大画像そのものをクリックで発火
$("#grayDisplay").click(function () {
  // 非表示にする
  $("#grayDisplay").fadeOut(200);
  return false;
});
