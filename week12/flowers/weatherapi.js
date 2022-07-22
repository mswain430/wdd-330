const apiURL = "https://api.openweathermap.org/data/2.5/onecall?&lat=32.8473&lon=-117.2742&units=imperial&appid=4bf6aba75f2215549614f1f151dee563";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
   document.querySelector('#current-temp').textContent = jsObject.current.temp;
    document.querySelector('#windspeed').innerHTML = `Windspeed: ${jsObject.current.wind_speed}`;
    document.querySelector('#current-temp').innerHTML =`Current Temperture is ${jsObject.current.temp}`;
document.querySelector('#humidity').innerHTML = `Humidity: ${jsObject.current.humidity}&#37;`;
const iconsrc= `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}.png`;
const desc = jsObject.current.weather[0].description;
document.querySelector('#description').innerHTML = `Description: ${jsObject.current.weather[0].description}`;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').innerHTML = desc;
/*    document.querySelector('#event').textContent = jsObject.alerts[0].event;
    document.querySelector('#alert_desc').textContent = jsObject.alerts[0].description;
document.querySelector('#event').innerHTML = `Event: ${jsObject.alerts[0].event}`;
document.querySelector('#alert_desc').innerHTML = `Description: ${jsObject.alerts[0].description}`; */
});

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

