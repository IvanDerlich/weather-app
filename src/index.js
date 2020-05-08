
const url = "http://api.openweathermap.org/data/2.5/weather?q=London";


console.log("Helloworld! Deployed");


fetch(url).
    then((response) => {

        console.log(response);
    })
    .catch((err) => {

        console.log(err);

    });