let city = document.getElementById('city');
let input = document.getElementById('inp');
let temp = document.getElementById('temp');
let hum = document.getElementById('hum');
let type = document.getElementById('type');
let wind = document.getElementById('wind');
let API_key = "53ca146442dd921a8bf6dad0ad2051bb";

const data = async function () {

    let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}`);

    console.log(url);

    let getWeather = await url.json();
    console.log(getWeather);
    city.innerHTML = `Weather in ${getWeather.name}`;

    temp.innerHTML = `${getWeather.main.temp}°C`;

    hum.innerHTML = `Humidity : ${getWeather.main.humidity}%`;

    type.innerHTML = `${getWeather.weather[0].description}`;

    wind.innerHTML = `Wind Speed : ${getWeather.wind.speed} km/h`;


}

function func() {
    search = input.value;
    data(search)
};

