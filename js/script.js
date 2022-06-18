const nav = document.querySelector('.accordion');
const recipes = document.querySelector('.more-recipes-list');
const navButton = document.querySelector('.nav-button');
const recipesButton = document.querySelector('.more-recipes-button');
const recipesIcon = document.querySelector('.more-recipes-button span');

navButton.addEventListener('click', () => {
  nav.classList.toggle('contents-shown');

  if (navButton.textContent === 'menu') {
    navButton.textContent = 'close';
    navButton.ariaLabel = 'Close navigation';
  } else {
    navButton.textContent = 'menu';
    navButton.ariaLabel = 'Open navigation';
  }

  if (nav.classList.contains('contents-shown') === false) {
    recipes.classList.remove('contents-shown');
    recipesIcon.textContent = 'add';
  }
});

recipesButton.addEventListener('click', () => {
  recipes.classList.toggle('contents-shown');

  if (recipesIcon.textContent === 'add') {
    recipesIcon.textContent = 'remove';
    recipesButton.ariaLabel = 'Close more recipes section';
    recipesButton.ariaExpanded = 'true';
  } else {
    recipesIcon.textContent = 'add';
    recipesButton.ariaLabel = 'Open more recipes section';
    recipesButton.ariaExpanded = 'false';
  }
});