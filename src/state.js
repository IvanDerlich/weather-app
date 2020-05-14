const state = {
  temp: '',
  feels: '',
  humidity: '',
  windSpeed: '',
  windDir: '',
  error: '',
  message: '',
  url: 'http://api.openweathermap.org/data/2.5/weather?appid=b93ac565c07c898f8ab078f813afa920&units=metric',
  switchImperial: () => {
    state.temp *= 9;
    state.temp /= 5;
    state.temp += 32;
  },
  switchMetric: () => {
    state.temp -= 32;
    state.temp *= 5;
    state.temp /= 9;
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