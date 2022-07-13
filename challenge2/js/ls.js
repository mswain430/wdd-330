const SUGGESTION_LIST = "SuggestionList";
// show a list of tasks
function getSuggestionList() {
    let suggestionListString = localStorage.getItem(SUGGESTION_LIST);

    let suggestionList = [];

    if (suggestionListString) {
        suggestionList = JSON.parse(suggestionListString);
    }
    return suggestionList;
}

function saveList(flower) {
    let suggestionList = getSuggestionList();

    suggestionList.push(list);

    localStorage.setItem(SUGGESTION_LIST, JSON.stringify(suggestionList));
}

function deleteList(id) {
    const suggestionList = getSuggestionList();

    let updatedList = suggestionList.filter(listing => suggestionListString.id != id);

    localStorage.setItem(SUGGESTION_LIST, JSON.stringify(updatedList));
}

function toggle(id) {
    const suggestionList = getSuggestionList();

    let updatedList = suggestionList.map(listing => {
        if (listing.id == id){
           listing.completed = !listing.completed;
        }
        return listing;
    });


    localStorage.setItem(SUGGESTION_LIST, JSON.stringify(updatedList));
}
export default {
    saveList,
    deleteList,
    getSuggestionList,
    toggle
}