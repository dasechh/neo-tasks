import Slider from "../components/Slider";
const main = document.querySelector('main');

async function init() {

    const sliderContainer = document.getElementById('slider-1')

    Slider({container: sliderContainer, cardsCount:10})
}

init()