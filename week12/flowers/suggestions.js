import utils from './utils.js';
import ls from './ls.js';



// onclick handler for button // Add event listeners
document.querySelector('#addBtn').onclick = addNewSuggestion;

//get input
const input = document.querySelector('#suggestionInput');
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;

//add on enter
input.addEventListener('keypress', e => {
    if(e.keyCode == '13') addNewSuggestion();
});

//load the list
loadSuggestions();

function addNewSuggestion(e) {
    const suggestion = {id: Date.now(), content: input.value, completed: false};
    //reset the input field
    input.value = '';
    //add the Ul
    const suggestionItem = createSuggestionItem(suggestion);
  // save to localStorage
    ls.saveSuggestion(suggestion);
    loadSuggestions();
}
// step 2
function createSuggestionItem(suggestion) {
    //suggestion div
    const suggestionDiv = document.createElement('div');
    suggestionDiv.classList.add('suggestion');

    //completeBtn
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = `✓`
    completeBtn.setAttribute('data-id', suggestion.id);
    completeBtn.classList.add('complete-btn')

    completeBtn.onclick = completeSuggestion;

    //Suggestion content
    const suggestionContent = document.createElement('div');
    suggestionContent.innerText = suggestion.content
    suggestionContent.classList.add('suggestion-content');

    if (suggestion.completed){
     suggestionContent.classList.add('completed');
    }

    //deletebtn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', suggestion.id);
    deleteBtn.classList.add('suggestion-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteSuggestion;

    suggestionDiv.appendChild(completeBtn);
    suggestionDiv.appendChild(suggestionContent);
    suggestionDiv.appendChild(deleteBtn);

    return suggestionDiv;
}

// step 4
function addToList(suggestionDiv) {
    //add to the document
    document.querySelector('#suggestions').appendChild(suggestionDiv);
}

function loadSuggestions() {
    document.querySelector('#suggestions').innerHTML = '';
    const suggestionList = ls.getSuggestionList();
    //debugging
    console.log(suggestionList);

    suggestionList.forEach(suggestion => {
        const el = createSuggestionItem(suggestion);
        addToList(el);
    });
}

//Events
function deleteSuggestion(e) {
    const btn = e.currentTarget;
    ls.deleteSuggestion(btn.getAttribute('data-id'));
    document.querySelector('#suggestions').innerHTML = '';
    loadSuggestions();
}
function completeSuggestion(e) {
    const btn = e.currentTarget;
    ls.toggle(btn.getAttribute('data-id'));
    document.querySelector('#suggestions').innerHTML = '';
    loadSuggestions();
}

function applyFilter(e){
    //clear the list
    document.querySelector('#suggestions').innerHTML = '';

    // declare the variables
    let filteredSuggestions = [];
    const allSuggestions = ls.getSuggestionList();

    //check which filter to apply
    if(e.currentTarget.id == 'activeFilter') {
        filteredSuggestions = utils.activeFilter(allSuggestions)
    } else if (e.currentTarget.id == 'allFilter'){
        filteredSuggestions = allSuggestions;
    } else if (e.currentTarget.id == 'completedFilter'){
        filteredSuggestions = utils.completedFilter(allSuggestions)
    }
    //draw the list
    filteredSuggestions.forEach(suggestion => {
        const el = createSuggestionItem(suggestion)
        addToList(el)
    });
}