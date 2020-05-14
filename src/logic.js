function errorHandling(state, err) {
  state.error = err;
  state.clean();
}

export default function get(state, updatePanel) {
  state.message = 'Fetching data...';
  state.error = '';
  updatePanel();
  const queryUrl = `${state.url}&q=${state.city}`;

  fetch(queryUrl)
    .then((response) => response.json())
    .then((response) => {
      state.response = response;
      try {
        if (response.cod !== 200) throw response.message;
        state.error = 200;
        state.temp = Math.round(response.main.temp * 100) / 100; 
        state.feels = Math.round(response.main.feels_like * 100) / 100;
        state.windSpeed = response.wind.speed;
        state.windDir = response.wind.deg;
        state.humidity = response.main.humidity;        
      } catch (err) {
        errorHandling(state, err);
      }
      updatePanel();
    })
    .catch((err) => {
      errorHandling(state, err);
    });
}
