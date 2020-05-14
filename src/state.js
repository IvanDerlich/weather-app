
function celsiusToFarenheit(celsius) {
  let farenheit = celsius * 9;
  farenheit /= 5;
  farenheit += 32;
  return Math.round(farenheit * 100) / 100;
}

function farenheitToCelsius(farenheit) {
  let celsius = farenheit - 32;
  celsius *= 5;
  celsius /= 9;
  return Math.round(celsius * 100) / 100;
}

const state = {
  city: '',
  temp: '',
  feels: '',
  humidity: '',
  windSpeed: '',
  windDir: '',
  error: '',
  message: '',
  response: '',
  degreesType: 'ºC',
  url: 'http://api.openweathermap.org/data/2.5/weather?appid=b93ac565c07c898f8ab078f813afa920&units=metric',
  switchImperial: () => {
    state.feels = celsiusToFarenheit(state.feels);
    state.temp = celsiusToFarenheit(state.temp);
  },
  switchMetric: () => {
    state.feels = farenheitToCelsius(state.feels);
    state.temp = farenheitToCelsius(state.temp);
  },
  clean: () => {
    state.temp = '';
    state.feels = '';
    state.humidity = '';
    state.windSpeed = '';
    state.windDir = '';
  },
};

export default state;