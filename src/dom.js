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
const data = document.querySelector('#data');
const comm = document.querySelector('#comm');

function updatePanel() {
  console.log("Update Panel")
  console.log(state);
  if (state.error === 200) {
    comm.classList.add('hide');
    data.classList.remove('hide');
    units.classList.remove('hide');
    units.innerHTML = state.degreesType;
    errorDiv.classList.remove('hide');
    message.innerHTML = `City: ${cityInput.value}`;

    if (state.temp) {
      tempDiv.innerHTML = `Temperature: ${state.temp} ${state.degreesType} `;
    }

    if (state.windSpeed && state.windDir) {
      windsDiv.innerHTML = `Winds: ${state.windSpeed} m/s from ${state.windDir}º`;
    }
    if (state.feels) {
      feelsDiv.innerHTML = `Feels: ${state.feels} ${state.degreesType}`;
    }

    if (state.humidity) {
      humidityDiv.innerHTML = `Humidity: ${state.humidity} %`;
    }

  } else {   
    console.log(state.error)
    comm.classList.remove('hide')
    message.innerHTML = 'There was an error';
    errorDiv.innerHTML = `Error: ${state.error}`;
    data.classList.add('hide');
  }
}

units.addEventListener('click', () => {
  if (units.classList.contains('fahrenheit')) {
    units.classList.remove('fahrenheit');
    state.degreesType = 'ºC';
    state.switchMetric();
    updatePanel(state);
  } else {
    units.classList.add('fahrenheit');
    state.degreesType = 'ºF';
    state.switchImperial();
    updatePanel(state);
  }
});

window.onload = () => {
  data.classList.add('hide');
  message.innerHTML = 'Type the city';
};

cityInput.addEventListener('keyup', () => {
  state.city = cityInput.value;
  units.classList.remove('hide');
  get(state, updatePanel);
});

