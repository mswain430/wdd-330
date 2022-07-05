import utils from './utils.js';
import ls from './ls.js';

//load the list


// onclick handler for button // Add event listeners
document.querySelector('#addBtn').onclick = addNewTodo;
//document.querySelector('#completeBtn').onclick = completeTodo;
//get input
const input = document.querySelector('#todoInput');
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;

//add on enter
input.addEventListener('keypress', e => {
    if(e.keyCode == '13') addNewTodo();
});

fetch("articlesOfFaith.json")
  .then(data => data.json())
  .then(articlesOfFaith => {
        const randomNum = Math.floor(Math.random() * articlesOfFaith.length);
        const inspiration = articlesOfFaith(randomNum);
        document.querySelector("#article").innerText =  inspiration.article;
        document.querySelector('#verse').innerText = inspiration.verse;
        document.querySelector('#reference').innerText = inspiration.reference;
})

loadTodos();

function addNewTodo(e) {
    const todo = {id: Date.now(), content: input.value, completed: false};
    //reset the input field
    input.value = '';

    //add the Ul
    const todoItem = createTodoItem(todo);
    //save to localStorage
    ls.saveTodo(todo);
    loadTodos();
}
// step 2
function createTodoItem(todo) {
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //completeBtn
    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = `✓`
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn')

    completeBtn.onclick = completeTodo;

    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content
    todoContent.classList.add('todo-content');

    if (todo.completed){
     todoContent.classList.add('completed');
    }

    //deletebtn
    const  deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

// step 4
function addToList(todoDiv) {
    //add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

function loadTodos() {
    document.querySelector('#todos').innerHTML = '';
    const todoList = ls.getTodoList();
    //debugging
    console.log(todoList);

    todoList.forEach(todo => {
        const el = createTodoItem(todo);
        addToList(el);
    });
}

//Events
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}
function completeTodo(e) {
    const btn = e.currentTarget;
    ls.toggle(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function applyFilter(e){
    //clear the list
    document.querySelector('#todos').innerHTML = '';

    // declare the variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    //check which filter to apply
    if(e.currentTarget.id == 'activeFilter') {
        filteredTodos = utils.activeFilter(allTodos)
    } else if (e.currentTarget.id == 'allFilter'){
        filteredTodos = allTodos;
    } else if (e.currentTarget.id == 'completedFilter'){
        filteredTodos = utils.completedFilter(allTodos)
    }
    //draw the list
    filteredTodos.forEach(todo => {
        const el = createTodoItem(todo)
        addToList(el)
    });
}