const searchInput = document.getElementById('list-search');
const listItems = document.querySelectorAll('.search__item');

searchInput.addEventListener('input', (e) => {
  const filter = e.target.value.toLowerCase();

  listItems.forEach((i) => {
    const itemText = i.textContent.toLowerCase();

    if (!itemText.includes(filter)) {
      i.style.display = 'none';
    } else {
      i.style.display = '';
    }
  });
});
