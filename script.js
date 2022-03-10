const hamburger = document.querySelector('.hamburger');
const navbarlist = document.querySelector('.navbarlist');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('show');
  navbarlist.classList.toggle('show');
});

document.querySelectorAll('.nav-list').forEach((e) => e.addEventListener('click', () => {
  hamburger.classList.remove('show');
  navbarlist.classList.remove('show');
}));