const header = document.querySelector('.header-logo');
let lastPosition = 0;

document.addEventListener('scroll', () => {
  let currentPosition = window.scrollY;

  if (lastPosition > currentPosition) {
    header.classList.add('show-header');
  } else {
    header.classList.remove('show-header');
  }

  lastPosition = currentPosition;
});