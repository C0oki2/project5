var swiper = new Swiper(".top_auto_swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*2번째 스와이퍼 */
  var swiper = new Swiper('.rise_swiper', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });


  /* 베스트, 샐러리*/

    $(function () {

      //multipage
      $('.Best').click(function () {
      
        $('#list_best').show().siblings().hide();
      });
      
      $('.List').click(function () {
      
      $('#list_steady').show().siblings().hide();
    });
    

    $('.Best').click( function() {
      $('.Best').addClass('active');
      $('.List').removeClass('active');
    });

    $('.List').click( function() {
      $('.Best').removeClass('active');
      $('.List').addClass('active');
    });

    


    });


    /*오리지널 */
    var swiper = new Swiper('.original_swiper', {
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
  

      /*fade_slider */
      var swiper = new Swiper(".fade_slider", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      });