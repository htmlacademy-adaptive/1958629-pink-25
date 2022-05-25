const navToggle = document.querySelector('.js-burger-button');
const header = document.querySelector('.js-page-header');

header.classList.add('page-header--js');

navToggle.addEventListener('click', () => {
  header.classList.toggle('page-header--opened');
});
