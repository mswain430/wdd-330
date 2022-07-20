/* Suggestions */
function activeFilter(suggestions) {
    return suggestions.filter(suggestion => {
        return !suggestion.completed
    });
}
function completedFilter(suggestions){
    return suggestions.filter(suggestion => {
        return suggestion.completed
    });
}
export default {
    activeFilter,
    completedFilter
}
