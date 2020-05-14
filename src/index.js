/* eslint-disable no-unused-vars */
import './style.scss';
import get from './logic';
import cityInput from './selectors';


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