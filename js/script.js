const boxActive = document.getElementsByClassName('sales')[0];

window.onscroll = function() {
    const scroll = window.pageYOffset;

    if (scroll > 300) {
        boxActive.classList.add('active');
    }
}





