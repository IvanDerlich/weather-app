
const url = "http://api.openweathermap.org/data/2.5/weather?q=London";


console.log("Helloworld! Deployed deplyed deployed");
console.log("Another deploy")


fetch(url).
    then((response) => {

        console.log(response);
    })
    .catch((err) => {

        console.log(err);

    });