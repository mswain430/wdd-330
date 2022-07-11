function activeFilter(flowers) {
    return flowers.filter(flower => {
        return !flower.completed
    });
}
function completedFilter(flowers){
    return flowers.filter(flower => {
        return flower.completed
    });
}
export default {
    activeFilter,
    completedFilter
}