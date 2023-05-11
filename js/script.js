// Scrollreveal
document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('.animate', {
        delay: 200, distance: "200px", viewOffset: {
            bottom: 100
        }
    });
})


// Slideshow
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    scrollbar: false,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


// Dropdown
const burger = document.querySelector('.burger');
const links = document.querySelector('.links');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  links.classList.toggle('active');
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const showBtn = dropdown.querySelector('.show');
  const content = dropdown.querySelector('.dropdown-content');

  showBtn.addEventListener('click', () => {
    content.classList.toggle('show');
  });
});