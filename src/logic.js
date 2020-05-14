function errorHandling(state, err) {
  state.error = err;
  state.clean();
}

export default function get(city, updatePanel, state, hideError) {
  state.message = 'Fetching data...';
  state.error = '';
  updatePanel();
  const queryUrl = `${state.url}&q=${city}`;

  fetch(queryUrl)
    .then((response) => response.json())
    .then((response) => {
      try {
        if (response.cod !== 200) throw response.message;
        if (response.main.temp) {
          state.temp = response.main.temp;
        }

        if (response.wind.speed && response.wind.deg) {
          state.windSpeed = response.windSpeed;
          state.windDi = response.wind.deg;
        }

        if (response.main.humidity) {
          state.humidity = response.main.humidity;
        }

        if (response.main.feels_like) {
          state.feels = response.main.feels_like;
        }

        state.error = '';
        state.message = `City of${response.main}`;

        updatePanel();
      } catch (err) {
        errorHandling(state, err);
      }
    })
    .catch((err) => {
      errorHandling(state, err);
    });
}
