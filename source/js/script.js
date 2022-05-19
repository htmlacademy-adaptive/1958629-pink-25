const navMenu = document.querySelector('.page-header__nav--js');
const navToggle = document.querySelector('.page-header__button-toogle--js');
const header = document.querySelector('.page__header--js');
const heade = document.querySelector('.page-header__position--js');

navToggle.addEventListener('click', () => {
  if (navMenu.classList.contains('nav--opened')) {
    navMenu.classList.remove('nav--opened');
    navToggle.classList.remove('page-header__button-toogle--opened');
    header.classList.remove('page__header--opened');
    heade.classList.remove('page-header__position--opened');
  } else {
    navMenu.classList.add('nav--opened');
    navToggle.classList.add('page-header__button-toogle--js');
    navToggle.classList.add('page-header__button-toogle--opened');
    header.classList.add('page-header--opened');
    heade.classList.add('page-header__position--opened');
  }
});
