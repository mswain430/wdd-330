// helper function to fetch the data from external source and return in JSON format
async function getJSON(url) {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await response.json();
            return fetchJson;
        }
    } catch(error){
        console.log(error);
    }
}
// model code
function getShips(url) {
    return getJSON(url);
}
// View code
function renderShipList(ships, shipListElement) {
    // display using table 2nd child
    const list = shipListElement.children[1];
    list.innerHTML = " ";
    // loop through the ships
    ships.forEach(function (ship) {
        console.log (ship);
        // create elements for list
        let listItem = document.createElement("tr");
        listItem.innerHTML = `
         <td><a href="${ship.url}">${ship.name}</a></td>
        <td>${ship.length}</td>
        <td>${ship.crew}</td>
        `;

        listItem.addEventListener("click", function(event){
            // when clicked the default link behavior should stop the #url
            event.preventDefault();
            getShipDetails(ship.url);

        });

        // add the list items to the list
        list.appendChild(listItem);
    });
}
// ****** Check todo - code to write the code to render the details to html dl, dd
function renderShipDetails(shipData) {
    //console.log(shipData);
    const detail = document.querySelector('#detailsbox');
    detail.innerHTML = "";
    detail.classList.remove('hidden');
    const h2 = document.createElement('h2');
    const button = document.createElement('button')
    button.classList.add('close')
    h2.innerText = `Starship Details`;
    const dl = document.createElement("dl");
    dl.innerHTML = `
        <button class='close'> </button>
        <dt>Name:</dt>
        <dd class="name">${shipData.name}</dd>
        <dt>Model:</dt>
        <dd class="model">${shipData.model}</dd>
        <dt>Length</dt>
        <dd class="class">${shipData.length}</dd>
        <dt>Manufacturer</dt>
        <dd class="movies">${shipData.manufacturer}</dd>
    `
    detail.appendChild(h2);
    detail.appendChild(button)
    detail.appendChild(dl);
}


// controller code
async function showShips(url = "https://swapi.dev/api/starships") {
    const results = await getShips(url);

    //get the list element
    const shipListElement = document.getElementById("shiplist");
    renderShipList(results.results, shipListElement);

    //enabling the next and prev buttons
    if(results.next){
        const next = document.getElementById("next");
        // normally we would prefer add EventListener method, like element.onEvent = event_function can only hold one listener of the type.
        //In this case we thats good. Because we are not re-creating the buttons each time  we load a new batch. This avoids that.
      //  next.ontouchend = () =>{
          next.onclick = () =>{
            // notice how we show the next page we just re-call the show ships function with a new URL
            showShips(results.next);
        };
    }
    if(results.previous){
        const prev = document.getElementById("prev");
        // set the option on the lister
        prev.onclick = () =>{
            showShips(results.previous);
        };
        prev.ontouchend = () =>{
            showShips(results.previous);
        };

    }
}

async function getShipDetails(url) {
    //call getJSON functions for the provided url
    const ship = await getShips(url);
    renderShipDetails(ship);

    //with the results populate the elements in the #detailsbox

}
showShips();

/* function toggleMenu() {
 document.getElementById("button").classList.toggle("open");
  console.log("It worked!")
}
// const x = document.getElementById("button");
// x.onclick = toggleMenu();

window.onload = () => {
    document.getElementById('close').onclick = function() {
        this.parentNode.remove()
        return false;
    };
}; */

// Get the modal
/* let modal = document.getElementById("myModal");

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
} */