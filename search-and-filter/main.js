const listContent = [
  'Item 1 Alex',
  'Item 2 Olga',
  'Item 3',
  'Item 4 Anton',
  'Item 5 HTML',
  'Item 6 CSS',
  'Item 7 JS',
  'Item 8',
  'Item 9',
  'Item 10',
];

const searchList = document.querySelector('.search__list');

function insertItems({filter}) {
  listContent.forEach((text) => {
    text = text.toLowerCase();
    if (text.includes(filter)) {
      const item = `<li class='search__item'>${text}</li>`;
      searchList.insertAdjacentHTML('beforeend', item);
    } else return;
  });
}

function clearContainer({container}) {
  container.replaceChildren();
}

const searchInput = document.getElementById('list-search');

searchInput.addEventListener('input', (e) => {
  const inputText = e.target.value.toLowerCase();
  clearContainer({container: searchList});
  insertItems({filter: inputText});
});
