const $iconMenu = document.getElementById('menu-icon'),
  $navbar = document.getElementById('navbar'),
  $searchIcon = document.querySelector('.search-icon');

function showMenu() {
  $iconMenu.classList.toggle('is-active');
  $navbar.classList.toggle('is-active');
}

function showSearchInput() {
  window.search.classList.toggle('is-active');
}

$searchIcon.addEventListener('click', showSearchInput);
$iconMenu.addEventListener('click', showMenu);
