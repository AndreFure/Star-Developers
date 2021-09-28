function imgSlider(anything) {
  document.querySelector('.imgpep').src = anything;
}
function changeBgColor(color) {
  const sec = document.querySelector('.secpep');
  sec.style.background = color;
}
function menuToggle() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
}