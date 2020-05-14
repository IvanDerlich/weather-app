import {
  errorDiv, tempDiv, windsDiv, humidityDiv, feelsDiv, cityLabel, cityInput, url,
} from './selectors';

export var temp = '';

function errorHandling(err) {
  errorDiv.innerHTML = `Error: ${err}`;
  // eslint-disable-next-line no-multi-assign
  tempDiv.innerHTML = windsDiv.innerHTML = humidityDiv.innerHTML = feelsDiv.innerHTML = '';
}

export default function get(city) {
  // eslint-disable-next-line no-multi-assign
  windsDiv.innerHTML = humidityDiv.innerHTML = feelsDiv.innerHTML = '';
  cityLabel.innerHTML = `City: ${cityInput.value}`;
  tempDiv.innerHTML = 'Fetching data...';
  const queryUrl = `${url}&q=${city}`;

  fetch(queryUrl)
    .then((response) => response.json())
    .then((response) => {
      try {
        if (response.cod !== 200) throw response.message;
        if (response.main.temp) {
          tempDiv.innerHTML = `Temperature: ${response.main.temp} ºC`;
          temp = response.main.temp;
        }

        if (response.wind.speed && response.wind.deg) {
          windsDiv.innerHTML = `Winds: ${response.wind.speed
          } m/s from ${response.wind.deg}º`;
        }

        if (response.main.humidity) humidityDiv.innerHTML = `Humidity: ${response.main.humidity} %`;

        if (response.main.feels_like) feelsDiv.innerHTML = `Feels: ${response.main.feels_like} ºC`;

        errorDiv.innerHTML = '';
      } catch (err) {
        errorHandling(err);
      }
    })
    .catch((err) => {
      errorHandling(err);
    });
}