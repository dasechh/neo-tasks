const upButton = document.getElementById('up-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    upButton.style.display = 'block';
    upButton.setAttribute('aria-hidden', 'false');
  } else {
    upButton.style.display = 'none';
    upButton.setAttribute('aria-hidden', 'true');
  }
});

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

upButton.addEventListener('click', scrollUp);
