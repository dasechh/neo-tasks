import Slider from "../components/Slider";
const main = document.querySelector('main');

function init() {
    const sliderContainer = document.createElement('section');
    Slider({container: sliderContainer, cardsCount:10});

    main.append(sliderContainer);
}

init()