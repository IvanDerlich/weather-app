import './style.scss';
import get from './logic';
import state from './state';


const cityInput = document.querySelector('#city');
const errorDiv = document.querySelector('#error');
const feelsDiv = document.querySelector('#feels');
const humidityDiv = document.querySelector('#humidity');
const tempDiv = document.querySelector('#temp');
const windsDiv = document.querySelector('#winds');
const units = document.querySelector('#units');
const message = document.querySelector('#message');
const data = document.querySelector('.data');

function updatePanel() {
  if (!state.error === '') {
    errorDiv.classList.remove('hide');
    message.innerHTML = `City: ${cityInput.value}`;
    windsDiv.innerHTML = `Winds: ${state.windSpeed} m/s from ${state.windDir}º`;
    feelsDiv.innerHTML = `Feels: ${state.feels} ºC`;
    tempDiv.innerHTML = `Temperature: ${state.temp} ºC`;
    humidityDiv.innerHTML = `Humidity: ${state.humidity} %`;
  } else {
    errorDiv.innerHTML = `Error: ${state.err}`;
  }
}

units.addEventListener('click', () => {
  if (units.classList.contains('fahrenheit')) {
    units.classList.remove('fahrenheit');
    units.innerHTML = 'ºC';
    state.switchMetric();
    updatePanel(state);
  } else {
    units.classList.add('fahrenheit');
    units.innerHTML = 'ºF';
    state.switchImperial();
    updatePanel(state);
  }
});

window.onload = () => {
  data.classList.add('hide');
  message.innerHTML = 'Type the city';
};

cityInput.addEventListener('keyup', () => {
  const city = cityInput.value;
  units.classList.remove('hide');
  get(city, updatePanel, state, hideError);
});

