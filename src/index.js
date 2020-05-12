/* eslint-disable func-style */
import "./style.scss"

// eslint-disable-next-line max-len
const
    cityInput = document.querySelector("#city"),
    cityLabel = document.querySelector("#city-label"),
    errorDiv = document.querySelector("#error"),
    feelsDiv = document.querySelector("#feels"),
    humidityDiv = document.querySelector("#humidity"),
    tempDiv = document.querySelector("#temp"),
    // eslint-disable-next-line max-len
    url = "http://api.openweathermap.org/data/2.5/weather?appid=b93ac565c07c898f8ab078f813afa920&units=metric",
    windsDiv = document.querySelector("#winds")


// eslint-disable-next-line require-jsdoc
function get (city) {

    windsDiv.innerHTML = "";
    humidityDiv.innerHTML = "";
    feelsDiv.innerHTML = "";
    cityLabel.innerHTML = cityInput.value;
    tempDiv.innerHTML = "Fetching data..."
    const queryUrl = `${url}&q=${city}`;

    fetch(queryUrl).
        then((response) => response.json()).
        then((response) => {

            console.log(response)
            tempDiv.innerHTML = `Temperature: ${response.main.temp} ºC`
            windsDiv.innerHTML = `Winds: ${response.wind.speed
            } m/s from ${response.wind.deg}º`;
            humidityDiv.innerHTML = `Humidity: ${response.main.humidity} %`
            feelsDiv.innerHTML = `Feels: ${response.main.feels_like} ºC`
            cityLabel.innerHTML = cityInput.value;
            errorDiv.innerHTML = "";

        }).
        catch((err) => {

            errorDiv.innerHTML = err;
            console.log(err)

        });

}

window.onload = () => {

    cityInput.click()

}

cityInput.addEventListener(
    "keyup",
    () => {

        const city = cityInput.value;

        get(city);

    }
)