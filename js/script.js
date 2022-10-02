$(function () {

    /* 햄버거 메뉴 */
    $('.ham').on('click',function(){
        $(this).hide()
        $('.ham2').show()
        $('.all_menu').fadeIn()
    })
    $('.ham2').on('click',function(){
        $(this).hide()
        $('.ham').show()
        $('.all_menu').fadeOut()
    })


    /* 랭귀지 체인지 */
    var chk = 0;
    $('header ul.l_box li:first-child').click(function () {
        if (chk == 0) {
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up')
            $(this).siblings().stop().slideDown()
            chk++; /* 클릭했을 때 1이 됨 */
        } else {
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down')
            $(this).siblings().stop().slideUp()
            chk = 0; /* 1이니까 엘스로 들어오고 다시 0으로 만듦 */
        }
    });

    /* bxslider */
    $('.main_slider').bxSlider({
        auto: true,
        prevSelector: '.prev', //이전 버튼 지정
        nextSelector: '.next', //다음 버튼 지정
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>', //이전 버튼 요소에 ‘prev’ 텍스트 삽입
        nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>', //다음 버튼 요소에 ‘next’ 텍스트 삽입 , 텍스트가 필요 없다면 text-indent로 텍스트 숨김
        pagerCustom: '.pager', //페이저만들어쓰기
    });

    /* 스크롤 이벤트 시작*/
    $(window).scroll(function(){
        var st = $(this).scrollTop();//스크롤 탑 위치를 st에 저장
        var evTop = $('.recommend').offset().top - 500 //이벤트가 스크롤 된 위치를 evTop에 저장


        /* 2 */
        var lineTop = $('.line_up').offset().top-400// 라인업이 스크롤 될 위치를 lineTop에 저장




        /* 이벤트 컨텐츠 액션 */
        if(st>=evTop){
            $('.contents .recommend section').eq(0).addClass('on').siblings().addClass('on').css('transition-delay','0.3s')
        }else{
            $('.contents .recommend section').removeClass('on');
        }

        /* 라인업 액션 */
        for(var i=0; i<4; i++){
            if(st>=lineTop + (i*50)){
                //이미지박스 나오기
                $('ul.img_box li').eq(i).addClass('on').css({
                    'transition-delay':(0.3*i)+'s'
                })
                //텍스트박스 나오기
                $('ul.txt_box li').eq(i).addClass('on').css({
                    'transition-delay':(0.1*i)+'s'
                })
            }else{
                $('ul.img_box li, ul.txt_box li').removeClass('on')
            }

            /* 프로덕트 */
            var prTop = $('.product').offset().top-500;
            var prli = $('.product').find('li').length;
            if(st>=prTop){
                for(var i =0 ; i<prli; i++){
                    $('.product').find('li').eq(i).addClass('on').css('animation-delay',(0.1 * i)+'s')
                }
            }else{
                $('.product').find('li').removeClass('on')
            }

        };
    })
    /* 스크롤 이벤트 끝*/

    /* 비디오 모달 */
    $('.contents .video button').on('click',function(){
        $('.vid_modal').fadeIn();
        $('.vid_modal iframe').attr('src','https://www.youtube.com/embed/JGTaLU0dp5E');
    })
    $('.vid_modal i').on('click',function(){
       /*  $('.vid_modal').fadeOut(1000) */
       $(this).parent('.vid_modal').fadeOut()
       $('.vid_modal iframe').attr('src','');
    });


    /* 패밀리 사이트 토글 */
    $('.family').on('click',function(){
        $(this).find('.none').slideToggle().siblings().find('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up')
    })

    /* 어사이드 클릭 탑으로 이ㅗㅇ */
    $('.top').on('click',function(){
        $('body,html').animate({scrollTop:0},500,'swing')
    })
});