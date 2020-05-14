/* eslint-disable no-unused-vars */
import './style.scss';
import {get, temp } from './logic';
import { cityInput, units, tempDiv } from './selectors';

units.addEventListener('click', () => {
  if (units.classList.contains('fahrenheit')) {
    units.classList.remove('fahrenheit');
    units.innerHTML = 'ºC';
    tempDiv.innerHTML = 
  } else {
    units.classList.add('fahrenheit');
    units.innerHTML = 'ºF';
    tempDiv.innerHTML = 
  }
});

window.onload = () => {
  cityInput.click();
};

cityInput.addEventListener('keyup', () => {
  const city = cityInput.value;
  units.classList.remove('hide');
  get(city);
});