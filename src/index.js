// eslint-disable-next-line max-len
const url = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=b93ac565c07c898f8ab078f813afa920";


console.log("Helloworld! Deployed deplyed deployed");
console.log("Another deploy")

fetch(url)
.then((response) => {
    return response.json();
})
.then( (response) =>{
    console.log(response)
})
.catch((err) => {
    console.log(err);
});