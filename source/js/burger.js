const burgerBtn = document.querySelector('.btn-hid');
const mobileMenu = document.querySelector('.burger');
const closeMenu = document.querySelector('.close__menu');

burgerBtn.addEventListener('click', function() {
    mobileMenu.classList.add('burger__open');
});

closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('burger__open');
});