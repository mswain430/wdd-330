function getJSON(url) {
    return fetch(url)
    .then(function(response){
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return response.json();
        }
    })
    .catch(function(error){
       console.log(error);
    });
}

// Model code - get the Ships url from promise
function getShips(url) {
    return getJSON(url);
}
// View code
function renderShipList(ships, shipListElement) {
    const list = shipListElement.children[1];
    list.innerHTML = "";
    //loop through ships
    ships.forEach(function(ship){
        //console.log(ship);
    // create elements for list
    let listItem = document.createElement("tr");
    listItem.innerHTML=`
    <td><a href=${ship.url}">${ship.name}</a></td>
    <td>${ship.length}</td>
    <td>${ship.crew}</td>
    `;

    listItem.addEventListener("click", function(event){
        // when clicked the default link behavior should be stopped and the details function should execute
        event.preventDefault();
        getShipDetails(ship.url);
        });

        // add the list item to the list
        list.appendChild(listItem);
    });
}

// code to write the code to render the details to html
function renderShipDetails(shipData) {
    console.log(shipData);
}
// controller code
function showShips(url = "https://swapi.dev/api/starships/") {
    getShips(url).then(function(data){
        console.log(data);
        const results = data.results;

    //get the list element
    const shipListElement = document.getElementById("shiplist");
    renderShipList(results, shipListElement);

    // enable the next and prev buttons
    if (results.next) {
        const next = document.getElementById("next");

    /*normally we would prefer the addEventListener method of adding a listener.
     Using something like 'element.onEvent = event_function' has the limitation of only
     being able to hold one listener of the type we choose. In this case that is a good thing however.
     Because we are not re-creating the buttons each time we load a new batch of data we could end up
     with several listeners attached to each button by the last page.
     We won't have that issue here */
     //ontouchend
     next.onclick = () => {
       //to show the next page we just re-call the showShips function with a new URL
       showShips(data.next);
     };
    }
    if (results.previous) {
        const prev = document.getElementById("prev");
       // ontouchend for
        prev.onclick = () => {
            showShips(data.previous);
        };
    }
   });
}

function getShipDetails(url) {
    //call getJSON function
    getShips(url).then (function(data) {
      renderShipDetails(data);
      //with the results populate the elements in the #detailsbox
    });
}

showShips();