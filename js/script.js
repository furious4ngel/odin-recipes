const landmarks = document.querySelectorAll('header, nav');
let lastPosition = 0;

document.addEventListener('scroll', () => {
  let currentPosition = window.scrollY;

  if (currentPosition < 88 || lastPosition > currentPosition) {
    landmarks.forEach(landmark => {
      landmark.classList.remove('hide-content');
      landmark.classList.add('show-content');
    });
  } else {
    landmarks.forEach(landmark => {
      landmark.classList.remove('show-content');
      landmark.classList.add('hide-content');
    });
  }

  lastPosition = currentPosition;
});