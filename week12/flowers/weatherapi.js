const apiURL="https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=32.9628&lon=117.0359&units=imperial&appid=4bf6aba75f2215549614f1f151dee563";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed;
const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#current-temp').textContent =`${jsObject.main.temp}`;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('.humidity').innerHTML = `Humidity: ${jsObject.main.humidity}&percnt;`;
document.querySelector('#windspeed').textContent = `${jsObject.wind.speed}mph`;

const temp = jsObject.main.temp;
const speed = jsObject.wind.speed;
});

