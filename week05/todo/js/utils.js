function activeFilter(todos) {
    return todos.filter(todo => {
        return !todo.completed
    });
}
function completedFilter(todos){
    return todos.filter(todo => {
        return todo.completed
    });
}
export default {
    activeFilter,
    completedFilter
}