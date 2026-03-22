import {fetchCurrency} from './api.js';
const timer = 1000 * 60 * 15;

const exchangeListContainer = document.getElementById('exchange__list');
const currency = {
  from: 'RUB',
  to: 'EUR,RSD,AUD,CAD,USD,CNY',
};

async function setExchangeData() {
  const currencyRates = await fetchCurrency(currency);
  const rates = currencyRates.result;

  clearExchangeItems();
  if (rates) {
    Object.entries(rates).forEach(([code, value]) => {
      const valueCost = (1 / value).toFixed(2) // Получаем курс по отношению к валюте

      const content = `
            <li class='exchange__item'>${code}:<span>${valueCost}</span></li>
            `;
      exchangeListContainer.insertAdjacentHTML('beforeend', content);
      
    });
  }
}

function clearExchangeItems() {
  exchangeListContainer.replaceChildren();
}

setExchangeData();

setInterval(() => {
  setExchangeData();
}, timer);
