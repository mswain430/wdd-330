import utils from './utils.js';
import ls from './ls.js';
const quoteURL = 'https://wdd330/challenge2/js/quotes.json';
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
