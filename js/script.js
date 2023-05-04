document.addEventListener("DOMContentLoaded", () => {
    ScrollReveal().reveal('.animate', {
        delay: 200, distance: "200px", viewOffset: {
            bottom: 100
        }
    });
})



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    scrollbar: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});







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