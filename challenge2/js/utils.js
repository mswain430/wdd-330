function activeFilter(listing) {
    return listing.filter(listing => {
        return !listing.completed
    });
}
function completedFilter(listing){
    return listing.filter(listing => {
        return listing.completed
    });
}
export default {
    activeFilter,
    completedFilter
}