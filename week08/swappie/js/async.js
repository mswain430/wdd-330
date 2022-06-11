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
            // when clicked the default link behavior should stop
            event.preventDefault();
            getShipDetails(ship.url);
        });

        // add the list items to the list
        list.appendChild(listItem);
    });
}
// ****** CHeck todo - code to write the code to render the details to html dl, dd
function renderShipDetails(shipData) {
    console.log(shipData);
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
        // normally we would prefer add EventListern method, like element.onEvent = event_function can only hold one listener of the type.
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
        //prev.ontouchend = () =>{
        prev.onclick = () =>{
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