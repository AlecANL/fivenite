const $iconMenu = document.getElementById('menu-icon'),
  $navbar = document.getElementById('navbar');

function showMenu() {
  $iconMenu.classList.toggle('is-active');
  $navbar.classList.toggle('is-active');
}
$iconMenu.addEventListener('click', showMenu);
