const hamburger = document.querySelector('.hamburger');
const navbarlist = document.querySelector('.navbarlist');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('show');
  navbarlist.classList.toggle('show');
  body.style.overflow = 'hidden';
  if (body.style.width < 574) {
    logo.innerHTML = '';
  }
});

document.querySelectorAll('.nav-list').forEach((e) => e.addEventListener('click', () => {
  hamburger.classList.remove('show');
  navbarlist.classList.remove('show');
  logo.innerHTML = 'John Doe';
  logo.style.color = 'white';
}));