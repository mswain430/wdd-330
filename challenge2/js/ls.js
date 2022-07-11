const FLOWER_LIST = "flowerList";
// show a list of tasks
function getFlowerList() {
    let flowerListString = localStorage.getItem(FLOWER_LIST);

    let flowerList = [];

    if (flowerListString) {
        flowerList = JSON.parse(todoListString);
    }
    return flowerList;
}

function saveFlower(flower) {
    let flowerList = getFlowerList();

    flowerList.push(flower);

    localStorage.setItem(FLOWER_LIST, JSON.stringify(flowerList));
}

function deleteFlower(id) {
    const flowerList = getFlowerList();

    let updatedList = flowerList.filter(flower => flower.id != id);

    localStorage.setItem(FLOWER_LIST, JSON.stringify(updatedList));
}

function toggle(id) {
    const flowerList = getFlowerList();

    let updatedList = flowerList.map(flower => {
        if (flower.id == id){
           flower.completed = !flower.completed;
        }
        return flower;
    });


    localStorage.setItem(FLOWER_LIST, JSON.stringify(updatedList));
}
export default {
    saveFlower,
    deleteFlower,
    getFlowerList,
    toggle
}