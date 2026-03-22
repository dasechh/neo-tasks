import styles from './Card.module.scss';

const failedImage = '/icons/failed-image.svg';
const titlePlaceholder = 'No title';

export default function Card({cardImage, cardTitle, cardText}) {
  const item = document.createElement('li');
  item.classList.add(styles.card);

  const cardItems = `
        <img class='${styles.card__image}' src='${cardImage}' alt='${cardTitle}' loading='lazy' aria-hidden='true' onerror="this.onerror=null;this.src='${failedImage}'"/> 
        <h3 class='${styles.card__title}'>${cardTitle || titlePlaceholder}</h3>
        ${cardText.trim().length ? `<p class="${styles.card__text}">${cardText.trim()}</p>` : ''}`;
        
  item.insertAdjacentHTML('beforeend', cardItems);

  return item;
}
