function activeFilter(todos) {
    return todos.filter(todo => {
        return !todo.completed
    });
}
export default {
    activeFilter
}