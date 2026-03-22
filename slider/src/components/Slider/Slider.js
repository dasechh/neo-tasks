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
    const scrollTolerance = 10;
    const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;
    const leftScroll = sliderContainer.scrollLeft;

    prevButton.disabled = leftScroll <= scrollTolerance;
    nextButton.disabled = leftScroll >= maxScroll - scrollTolerance;
  };

  sliderContainer.addEventListener('scroll', onScroll);
  onScroll();
}

function addSliderButtons(controls, sliderList, scrollStep) {
  const nextButton = Button({
    buttonVariant: 'button__arrow',
    buttonOnClick: () => nextScroll(sliderList, scrollStep),
  });

  const prevButton = Button({
    buttonVariant: 'button__arrow',
    buttonClass: 'button__arrow-left',
    buttonOnClick: () => prevScroll(sliderList, scrollStep),
  });

  controls.append(prevButton, nextButton);
  return {prevButton, nextButton};
}

export default async function Slider({container, cardsCount}) {
  const cards = await getData({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos',
    params: {_limit: cardsCount},
  });

  const slider = `
    <div class=${styles.slider}>
      <ul class="${styles.slider__list}"></ul>
      <div class='${styles.slider__controls}'></div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', slider);

  const controls = container.querySelector(`.${styles.slider__controls}`);
  const sliderList = container.querySelector(`.${styles.slider__list}`);

  if (cards && cards.length) {
    const sliderCards = cards.map((data) => {
      return Card({cardImage: data.url, cardTitle: data.title, cardText: data.text || ''});
    });
    sliderList.append(...sliderCards);
  }

  const firstCardSize = sliderList.querySelector('li').offsetWidth || 0;
  const sliderListGap = parseInt(getComputedStyle(sliderList).gap) || 0;
  const scrollStep = firstCardSize + sliderListGap;

  const {prevButton, nextButton} = addSliderButtons(controls, sliderList, scrollStep);
  sliderScroll(sliderList, prevButton, nextButton);
}
