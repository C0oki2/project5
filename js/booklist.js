$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "우리" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {

      const boxs = $('#list_best .box');

      for (let i = 0; i < boxs.length; i++) {

        $("#list_best >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#list_best >.box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
        $("#list_best >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

      }

    });


  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "마음" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {

      // for문 (8개)
      const boxs = $('#list_steady .box');


      for (let i = 0; i < boxs.length; i++) {

        $("#list_steady >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $("#list_steady >.box").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
        $("#list_steady >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


        // let str = msg.documents[i].contents;
        // let str2 = str.substring(0, 60);

        // $("#list_steady >.box").eq(i).append("<p>" + '<a href="#">' + str2 + "</a>" + "</p>");
        // $("#list_steady >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

      }
    });


    
/*PICK 취향을 분석해 꼭 맞는 책을 추천해 드릴게요 부분*/ 

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "작가" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {

      // for문 (8개)
      const boxs = $('.pick_books .book1');
      const jare = [ '[경제/경영]','[인문]', '[문학]', '[에세이]'];


      for (let i = 0; i < boxs.length; i++) {

        $(".pick_books >.book1").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".pick_books> .book1").eq(i).append("<p>" + jare[i]+ "</p>");
        $(".pick_books> .book1").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>");
        $(".pick_books >.book1").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      }
    });




    /*교보 오리지널*/

    
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "작가" },
    headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
  })
    .done(function (msg) {

      // for문 (8개)
      const boxs = $('.original_swiper .swiper-slide');



      for (let i = 0; i < boxs.length; i++) {

        $(".original_swiper .swiper-slide").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>" + "<br>");
        $(".original_swiper .swiper-slide").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>" + "<br>");
        $(".original_swiper .swiper-slide").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


      }
    });

    /* */

    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "오늘", size:9 },
      headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
    })
      .done(function (msg) {
  
        // for문 (8개)
        const boxs = $('.rise_swiper .swiper-slide');
  
  
  
        for (let i = 0; i < boxs.length; i++) {
  
          $(".rise_swiper .swiper-slide").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>" + "<br>");
          $(".rise_swiper .swiper-slide").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>" + "<br>");
          $(".rise_swiper .swiper-slide").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
  
  
        }
      });
  


      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "오늘", size:4 },
        headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
      })
        .done(function (msg) {
    
          // for문 (8개)
          const boxs = $('.book4');
    
    
    
          for (let i = 0; i < boxs.length; i++) {
    
            $(".book4").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>" + "<br>");
            $(".book4").eq(i).append("<h3>" + '<a href="#">' + msg.documents[i].title + "</a>" + "</h3>" + "<br>");
            $(".book4").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");
    
    
          }
        });
    

        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "동화" },
          headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })
          .done(function (msg) {
      
            // for문 (8개)
            const boxs = $('.purchase_swiper .swiper-slide');

      
            for (let i = 0; i < boxs.length; i++) {
      
              $(".purchase_swiper .swiper-slide").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>" + "<br>");
              $(".purchase_swiper .swiper-slide").eq(i).append("<h5>"  + msg.documents[i].title + "</h5>" + "<br>");
      
            }
          });

               //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
      $(function () {
        $.get("sub.txt", function (data) {
          $("#books_text p").html(data);
        })

        $(".more_btn").click(function(){
          $("#books_preview_text").hide();
          $("#books_text").show();
        });


        $(".close_btn").click(function(){
          $("#books_text").hide();
          $("#books_preview_text").show();
        });

      }); 