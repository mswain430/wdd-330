import utils from './utils.js';
import ls from './ls.js';

//load the list
// onclick handler for button // Add event listeners
document.querySelector('#addBtn').onclick = addNewFlower;

//get input
const input = document.querySelector('#flowerInput');
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;

//add on enter
input.addEventListener('keypress', e => {
    if(e.keyCode == '13') addNewFlower();
});

fetch('flowerquotes.json')
  .then(data => data.json())
  .then(flowerquotes => {
        const randomNum = Math.floor(Math.random() * flowerquotes.length);
        const inspiration = flowerquotes[randomNum];

        document.querySelector('#quote').innerText = '"' + inspiration.quote + '"';
        document.querySelector('#author').innerText = `~ ${inspiration.author}`;
})

/* fetch("articlesOfFaith.json")
  .then(data => data.json())
  .then(articlesOfFaith => {
        const randomNum = Math.floor(Math.random() * articlesOfFaith.length);
        const inspiration = articlesOfFaith[randomNum];

        document.querySelector('#reference').innerText =  inspiration.article ;
        document.querySelector('#article').innerText = inspiration.verse;
        document.querySelector('#verse').innerText = '~' + inspiration.reference;
})*/
loadFlowers();

function addNewFlower(e) {
    const flower = {id: Date.now(), content: input.value, completed: false};
    //reset the input field
    input.value = '';

    //add the Ul
    const flowerItem = createFlowerItem(flower);
    //save to localStorage
    ls.saveFlower(flower);
    loadFlowers();
}
// step 2
function createFlowerItem(flower) {
    //flower div
    const flowerDiv = document.createElement('div');
    flowerDiv.classList.add('flower');

    //completeBtn
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = `✓`
    completeBtn.setAttribute('data-id', flower.id);
    completeBtn.classList.add('complete-btn')

    completeBtn.onclick = completeFlower;

    //flower content
    const flowerContent = document.createElement('div');
    flowerContent.innerText = flower.content
    flowerContent.classList.add('flower-content');

    if (flower.completed){
     flowerContent.classList.add('completed');
    }

    //deletebtn
    const  deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', flower.id);
    deleteBtn.classList.add('flower-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteFlower;

    flowerDiv.appendChild(completeBtn);
    flowerDiv.appendChild(flowerContent);
    flowerDiv.appendChild(deleteBtn);

    return flowerDiv;
}

// step 4
function addToList(flowerDiv) {
    //add to the document
    document.querySelector('#flowers').appendChild(flowerDiv);
}

function loadFlowers() {
    document.querySelector('#flowers').innerHTML = '';
    const flowerList = ls.getFlowerList();
    //debugging
    console.log(flowerList);

    flowerList.forEach(flower => {
        const el = createFlowerItem(flower);
        addToList(el);
    });
}

//Events
function deleteFlower(e) {
    const btn = e.currentTarget;
    ls.deleteFlower(btn.getAttribute('data-id'));
    document.querySelector('#flowers').innerHTML = '';
    loadFlowers();
}
function completeFlower(e) {
    const btn = e.currentTarget;
    ls.toggle(btn.getAttribute('data-id'));
    document.querySelector('#flowers').innerHTML = '';
    loadFlowers();
}

function applyFilter(e){
    //clear the list
    document.querySelector('#flowers').innerHTML = '';

    // declare the variables
    let filteredFlowers = [];
    const allFlowers = ls.getFlowerList();

    //check which filter to apply
    if(e.currentTarget.id == 'activeFilter') {
        filteredFlowers = utils.activeFilter(allFlowers)
    } else if (e.currentTarget.id == 'allFilter'){
        filteredTodosFlowers = allFlowers;
    } else if (e.currentTarget.id == 'completedFilter'){
        filteredFlowers = utils.completedFilter(allFlowers)
    }
    //draw the list
    filteredFlowers.forEach(flower => {
        const el = createFlowerItem(flower)
        addToList(el)
    });
}