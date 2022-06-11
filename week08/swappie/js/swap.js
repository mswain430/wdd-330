const prevButton = document.getElementById('#prevBtn');
const nextButton = document.getElementById('#nextBtn');
const textButton = document.getElementById('number');
const apiButton = document.getElementById('starships');
const outputDiv = document.getElementById('#output');

const textURL = 'https://swapi.dev/api/starships/9/';
const apiURL = 'https://swapi.dev/api/starships/';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        console.log('response okay')
        return response;

    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => console.log('There was an error:', error))
},false);