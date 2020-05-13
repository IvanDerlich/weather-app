// eslint-disable-next-line import/no-webpack-loader-syntax
import './style.scss';

const
  cityInput = document.querySelector('#city');
const cityLabel = document.querySelector('#city-label');
const errorDiv = document.querySelector('#error');
const feelsDiv = document.querySelector('#feels');
const humidityDiv = document.querySelector('#humidity');
const tempDiv = document.querySelector('#temp');
const url = 'http://api.openweathermap.org/data/2.5/weather?appid=b93ac565c07c898f8ab078f813afa920&units=metric';
const windsDiv = document.querySelector('#winds');

function errorHandling(err) {
  errorDiv.innerHTML = `Error: ${err}`;
  // eslint-disable-next-line no-multi-assign
  tempDiv.innerHTML = windsDiv.innerHTML = humidityDiv.innerHTML = feelsDiv.innerHTML = '';
}

function get(city) {
  windsDiv.innerHTML = '';
  humidityDiv.innerHTML = '';
  feelsDiv.innerHTML = '';
  cityLabel.innerHTML = `City: ${cityInput.value}`;
  tempDiv.innerHTML = 'Fetching data...';
  const queryUrl = `${url}&q=${city}`;

  fetch(queryUrl)
    .then((response) => response.json())
    .then((response) => {
      try {
        if (response.cod !== 200) throw response.message;
        if (response.main.temp) tempDiv.innerHTML = `Temperature: ${response.main.temp} ºC`;

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

window.onload = () => {
  cityInput.click();
};

cityInput.addEventListener(
  'keyup',
  () => {
    const city = cityInput.value;

    get(city);
  },
);