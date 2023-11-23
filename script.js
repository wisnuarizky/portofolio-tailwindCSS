// hamburger
const hamburger = document.querySelector('#hamburger');
const keluar = document.querySelector('#keluar');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('muncul');
  hamburger.classList.toggle('hilang');

  keluar.classList.toggle('muncul');
  keluar.classList.toggle('hilang');

  navMenu.classList.toggle('hidden');
});

keluar.addEventListener('click', function () {
  keluar.classList.toggle('muncul');
  keluar.classList.toggle('hilang');

  hamburger.classList.toggle('muncul');
  hamburger.classList.toggle('hilang');

  navMenu.classList.toggle('hidden');
});

// navbar
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan toggle sesuai tema
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
