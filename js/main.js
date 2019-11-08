window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 200){
        header.classList.add('navbar');
    } else{
        header.classList.remove('navbar');
    }
}