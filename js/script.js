const header = document.querySelector('header')
const btnMenu = document.querySelector('.btn-menu')
const btnClose = document.querySelector('.btn-close')


const toggleNav = () => header.classList.toggle('nav-open');

btnMenu.addEventListener('click', toggleNav)
btnClose.addEventListener('click', toggleNav)
