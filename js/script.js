const header = document.querySelector('header');
const nav = document.querySelector('nav');
let lastPosition = 0;

document.addEventListener('scroll', () => {
  let currentPosition = window.scrollY;

  if (lastPosition > currentPosition) {
    header.classList.add('show-header');
    nav.classList.add('show-nav');
  } else {
    header.classList.remove('show-header');
    nav.classList.remove('show-nav');
  }

  lastPosition = currentPosition;
});