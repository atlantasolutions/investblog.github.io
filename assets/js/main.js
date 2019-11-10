window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 200){
        header.classList.add('navbar');
    } else{
        header.classList.remove('navbar');
    }
}

$(".hamburger").click(function(){
    $(".nav-links-mob").toggleClass("move");
    $(this).toggleClass("close-menu"); // осталось только научить меню "уезжать" вправо.
});
