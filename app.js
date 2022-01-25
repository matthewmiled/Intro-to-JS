// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners

todoButton.addEventListener('click', addTodo);


// Functions

// This is what is done when we want to add a new todo item
// It will create a new html list item and create a 'checked' and 'delete' button

function addTodo(event){
    event.preventDefault() // prevents the page from refreshing when we click the button and submit the form
    
    // Create todo div
    const todoDiv = document.createElement('div');
    // Add class 'todo' to the new div
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hey';
    newTodo.classList.add('todo-item');

    // Place newTodo li item into the new todoDiv
    todoDiv.appendChild(newTodo);

    // Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    // Now we are adding this new div to the todo ul list defined in the HTML doc
    todoList.appendChild(todoDiv);


}