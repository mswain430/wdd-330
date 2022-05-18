import utils from './utils.js';
import ls from './ls.js';

// onclick handler for button
document.querySelector('#addBtn').onclick = addNewTodo;

//get input
const input = document.querySelector('#todoInput');

//add on enter
input.addEventListener('keypress', e => {
    if(e.keyCode == '13') addNewTodo();
});

loadTodos();

function addNewTodo(e) {
    const todo = { id: Date.now(), content: input.value, completed: false};

    //reset the input field
    input.value;

    //add the Ul
    const todoItem = createTodoItem(todo);

    //save to localStorage
    ls.saveTodo(todo);

    loadTodos();
}

function createTodoItem(todo) {
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //completeBtn
    const completeBtn = document.createElement('button')
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn')

    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content
    todoContent.classList.add('todoContent');

    //deletebtn
    const  deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X"
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild('completeBtn');
    todoDiv.appendChild('todoContent');
    todoDiv.appendChild('deleteBtn');

    return todoDiv;
}

function addToList(todoDiv) {
    //add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

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

function deleteTodo(e) {}