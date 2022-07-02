import utils from './utils.js';
import ls from './ls.js';

//load the list
loadTodos();

// onclick handler for button // Add event listeners
document.querySelector('#addBtn').onclick = addNewTodo;
document.querySelector('#deleteBtn').onclick = deleteTodo;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;
//get input
const input = document.querySelector('#todoInput');

//add on enter
input.addEventListener('keypress', e => {
    if(e.keyCode == '13') addNewTodo();
});


// step 1
//function newTodo() { }

function addNewTodo(e) {
    const todo = { id: Date.now(), content: input.value, completed: false};
    //reset the input field
    input.value = "";

    //add the Ul
    const todoItem = createTodoItem(todo);

    //save to localStorage
    ls.saveTodo(todo);

    loadTodos();
}
// step 2
//function createTodo() { }

// step 3 same as 44?

function createTodoItem(todo) {
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //completeBtn
    const completeBtn = document.createElement('button')
    completeBtn.setAttribute('id', todo.id);
    completeBtn.classList.add('complete-btn')


   // completeBtn.onclick = toggleComplete;


    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content
    todoContent.classList.add('todoContent');

    if (todo.completed){
        completeBtn.innerText = "✓"
        todoContent.classList.add('completed')
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

// step 0
function loadTodos() {
    document.querySelector('#todos').innerHTML = " ";
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
   // document.querySelector('#todos').innerHTML = '✓';

    loadTodos();
}

function toggleComplete(e) {
 // div.todoContent.classList.add('.completed');
}

function applyFilter(e){
    //clear the list
    document.querySelector('#todos').innerHTML = '';

    // declare the variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    //check which filter to apply
    if (e.currentTarget.id == 'activeFilter') {
        //apply active
        filteredTodos = utils.activeFilter(allTodos)
    }

    //draw the list
    filteredTodos.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el)
    })
}