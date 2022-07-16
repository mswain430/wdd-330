import utils from './utils.js';
import ls from './ls.js';

// menu system responsive
const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('responsive')},
  false);

// mid resizing issue
window.oneresize = () => { if(window.innerWidth > 760)
{ mainnav.classList.remove('responsive')}};

// end menu system responsive

const quoteURL = 'https://github.com/wdd330/challenge2/js/quotes.json';
fetch('quoteURL')
  .then(data => data.json())
  .then(quotes => {
        const randomNum = Math.floor(Math.random() * quotes.length);
        const inspiration = quotes[randomNum];

        document.querySelector('#quote').innerText = '"' + inspiration.quote + '"';
        document.querySelector('#author').innerText = '~' + inspiration.author;
});


/*export default class Flowers {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
  }
   */
 loadListing();
  // onclick handler for button // Add event listeners
  document.querySelector('#addBtn').onclick = addNewListing;

    //get input
    const input = document.querySelector('#listInput');
    document.querySelector('#allFilter').onclick = applyFilter;
    document.querySelector('#activeFilter').onclick = applyFilter;
    document.querySelector('#completedFilter').onclick = applyFilter;

//add on enter
input.addEventListener('keypress', e => {
    if(e.keyCode == '13') addNewListing();
});

function addNewListing(e) {
    const listing = {id: Date.now(), content: input.value, completed: false};
    //reset the input field
    input.value = '';

    //add the Ul
    const listItem = createListItem(listing);
    //save to localStorage
    ls.saveList(listing);
    loadListing();
}
// step 2
function createListItem(listing) {
    //list div
    const listDiv = document.createElement('div');
    listDiv.classList.add('listing');

    //completeBtn
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = `✓`
    completeBtn.setAttribute('data-id', listing.id);
    completeBtn.classList.add('complete-btn')

    completeBtn.onclick = completeList;

    //flower content
    const listContent = document.createElement('div');
    listContent.innerText = listing.content
    listContent.classList.add('list-content');

    if (listing.completed){
     listContent.classList.add('completed');
    }

    //deletebtn
    const  deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', listing.id);
    deleteBtn.classList.add('list-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteList;

    flowerDiv.appendChild(completeBtn);
    flowerDiv.appendChild(listContent);
    flowerDiv.appendChild(deleteBtn);

    return listDiv;
}

// step 4
function addToList(listDiv) {
    //add to the document
    document.querySelector('#list').appendChild(listDiv);
}

function loadListing() {
    document.querySelector('#list').innerHTML = '';
    const suggestionList = ls.getSuggestionList();
    console.log(suggestionList);

    suggestionList.forEach(listing => {
        const el = createListItem(listing);
        addToList(el);
    });
}

//Events
function deleteList(e) {
    const btn = e.currentTarget;
    ls.deleteList(btn.getAttribute('data-id'));
    document.querySelector('#listing').innerHTML = '';
    loadListing();
}
function completeList(e) {
    const btn = e.currentTarget;
    ls.toggle(btn.getAttribute('data-id'));
    document.querySelector('#listing').innerHTML = '';
    loadListing();
}

function applyFilter(e){
    //clear the list
    document.querySelector('#listing').innerHTML = '';

    // declare the variables
    let filteredListing = [];
    const allListing = ls.getSuggestionList();

    //check which filter to apply
    if(e.currentTarget.id == 'activeFilter') {
        filteredListing = utils.activeFilter(allListing)
    } else if (e.currentTarget.id == 'allFilter'){
        filteredListing = allListing;
    } else if (e.currentTarget.id == 'completedFilter'){
        filteredListing = utils.completedFilter(allListing)
    }
    //draw the list
    filteredListing.forEach(listing => {
        const el = createListItem(listing)
        addToList(el)
    });
}

window.addEventListener('load', loadData);

function loadData() {
    // when coming from details
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.scrollTo(0,0);
    document.querySelector('#pageTitle').innerText = "flowers & friends";

    // hide back button
    document.querySelector('#backButton').hidden = true;

    flowerdataData.forEach( (flower, i) => {
        const flowerNode = createFlowerNode(flower, i);
        flowerNode.addEventListener('click', viewFlower);

        app.appendChild(flowerNode);
    })
}

function createFlowerNode(flower, i, showDetails = false) {
    const div = document.createElement('div');
    const h1 = document.getElementById('pageTitle');
    const img = document.createElement('img');

    div.classList.add('flower');
    div.id = i;
    img.src = flowers.img;


    if (showDetails) {
        h1.innerText = flower.type;
        const desc = document.createElement('div');
        desc.innerHTML = `<h2>Description</h2>
                            ${flowers.desc}`;

        const loc = document.createElement('div');
        loc.innerHTML = `<h2>location</h2>
                            ${flowers.location}`;


        div.appendChild(img);
        div.appendChild(desc);
        div.appendChild(loc);
    } else {
        const h2 = document.createElement('h2');
        h2.innerText = flowers.type;

        div.appendChild(h2);
        div.appendChild(img);
    }

    return div;
}

function viewFlower(event) {
    // Clear the screen and scroll to the top
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.scrollTo(0, 0);

    // Pull id out of the event
    const id = event.currentTarget.id;

    // Get Flower node
    const flowerDetails = createFlowerNode(flowerData[id], id, true);
    app.appendChild(flowerDetails);

    // Show back button
    document.querySelector('#backButton').hidden = false;
}