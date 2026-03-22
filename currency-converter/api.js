const xRapidApiKey = 'de46a04d9emsh821a21a80aa53c0p139786jsn653edd650823';
const xRapidApiHost = 'currency-converter-pro1.p.rapidapi.com';

export async function fetchCurrency({from, to}) {
  try {
    const options = {
      method: 'GET',
      url: 'https://currency-converter-pro1.p.rapidapi.com/latest-rates',
      params: {
        base: from,
        currencies: to,
      },
      headers: {
        'x-rapidapi-key': xRapidApiKey,
        'x-rapidapi-host': xRapidApiHost,
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
