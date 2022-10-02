$(function(){
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
})