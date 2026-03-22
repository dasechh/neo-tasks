import styles from './Slider.module.scss';
import Card from '../Card';
import Button from '../Button';
import getData from '../../utils/getData';

function nextScroll(sliderContainer, step) {
  sliderContainer.scrollBy({left: step, behavior: 'smooth'});
}

function prevScroll(sliderContainer, step) {
  sliderContainer.scrollBy({left: -step, behavior: 'smooth'});
}

function sliderScroll(sliderContainer, prevButton, nextButton) {
  const onScroll = () => {
    if (sliderContainer.scrollLeft === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }
    if (
      Math.round(sliderContainer.scrollLeft) >=
      sliderContainer.scrollWidth - sliderContainer.clientWidth
    ) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  };

  sliderContainer.addEventListener('scroll', onScroll);
  onScroll();
}

export default async function Slider({container, cardsCount}) {
  const cards = await getData({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos',
    params: {_limit: cardsCount},
  });

  const template = document.createElement('template');
  template.innerHTML = `
  <div class=${styles.slider}>
    <ul class="${styles.slider__list}"></ul>
    <div class='${styles.slider__controls}'></div>
  </div>
`;

  const slider = template.content.firstElementChild;
  const controls = slider.querySelector(`.${styles.slider__controls}`);
  const sliderList = slider.querySelector(`.${styles.slider__list}`);

  if (cards && cards.length) {
    const sliderCards = cards.map((data) => {
      return Card({cardImage: data.url, cardTitle: data.title, cardText: data.text || ''});
    });
    sliderList.append(...sliderCards);
  }

  let step = 0;

  requestAnimationFrame(() => {
    const firstCardSize = sliderList.querySelector('li').offsetWidth || 0;
    const sliderListGap = parseInt(getComputedStyle(sliderList).gap) || 0;
    step = firstCardSize + sliderListGap;
  });

  const nextButton = Button({
    buttonVariant: 'button__arrow',
    buttonOnClick: () => nextScroll(sliderList, step),
  });
  const prevButton = Button({
    buttonVariant: 'button__arrow',
    buttonClass: 'button__arrow-left',
    buttonOnClick: () => prevScroll(sliderList, step),
  });

  controls.append(prevButton, nextButton);

  requestAnimationFrame(() => {
    sliderScroll(sliderList, prevButton, nextButton);
  });

  container.append(slider);
}
