// Exercise 3: Responsive Navigation Bar
// Write your implementation under each TODO.

const menuButton = document.querySelector('#menu-button');
const navLinks = document.querySelector('#nav-links');
const dropdownButton = document.querySelector('#dropdown-button');
const dropdownMenu = document.querySelector('#dropdown-menu');
function setMenuOpen(isOpen) {
  // TODO: add or remove the "open" class on navLinks (styles.css shows the links when it is there).
  navLinks.classList.toggle('open')
}
menuButton.addEventListener('click', () => {
  // TODO: toggle mobile menu.
  navLinks.classList.toggle('open')
});
dropdownButton.addEventListener('click', () => {
  // TODO: toggle the dropdown by adding/removing the hidden attribute on dropdownMenu.
  dropdownMenu.hidden = !dropdownMenu.hidden
});
document.addEventListener('keydown', (event) => {
  // TODO: Escape closes any open menu.
  if (event.key === 'Escape') {
  navLinks.classList.remove('open');
  dropdownMenu.hidden = true;
}
});
