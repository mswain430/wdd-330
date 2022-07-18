const SUGGESTION_LIST = "suggestionList";
// show a list of tasks
function getSuggestionList() {
    let suggestionListString = localStorage.getItem(SUGGESTION_LIST);

    let suggestionList = [];

    if (suggestionListString) {
        suggestionList = JSON.parse(suggestionListString);
    }
    return suggestionList;
}

function saveSuggestion(suggestion) {
    let suggestionList = getSuggestionList();

    suggestionList.push(suggestion);

    localStorage.setItem(SUGGESTION_LIST, JSON.stringify(suggestionList));
}

function deleteSuggestion(id) {
    const suggestionList = getSuggestionList();

    let updatedList = suggestionList.filter(suggestion => suggestion.id != id);

    localStorage.setItem(SUGGESTION_LIST, JSON.stringify(updatedList));
}

function toggle(id) {
    const suggestionList = getSuggestionList();

    let updatedList = suggestionList.map(suggestion => {
        if (suggestion.id == id){
           suggestion.completed = !suggestion.completed;
        }
        return suggestion;
    });


    localStorage.setItem(SUGGESTION_LIST, JSON.stringify(updatedList));
}
export default {
    saveSuggestion,
    deleteSuggestion,
    getSuggestionList,
    toggle
}

