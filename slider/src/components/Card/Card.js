import styles from './Card.module.scss';

const failedImage = '/icons/failed-image.svg'
const titlePlaceholder = 'No title';
const textPlaceholder = '';

export default function Card ({cardImage, cardTitle, cardText})  {
  const textElement = cardText
    ? `
    <p class="${styles.card__text}">${cardText || textPlaceholder}</p>
  `
    : '';

    const template = document.createElement('template');
    template.innerHTML = `
    <li class='${styles.card}'>
        <img class='${styles.card__image}' src='${cardImage}' alt='${cardTitle}' loading='lazy' aria-hidden='true' onerror="this.onerror=null;this.src='${failedImage}'"/> 
        <h3 class='${styles.card__title}'>${cardTitle || titlePlaceholder}</h3>
        ${textElement}
    </li>`
  return template.content.firstElementChild;
};

