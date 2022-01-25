// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)


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
    // We want the text to be whatever is written in the input form
    newTodo.innerText = todoInput.value;
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

    // Clear value in input form
    todoInput.value = "";

}

function deleteCheck(event) {
    const item = event.target;

    // Delete TODO

    if(item.classList[0] === 'delete-btn'){
       // We don't want to delete the item itself (because that is just the trash button)
       // We want to delete the whole parent item of that button
        const todo = item.parentElement;
        // Adding a class to the item to be deleted -> in the stylesheet we are then adding a style to this class so it animates before being deleted
        todo.classList.add('fall');
        
        // Once aninmation has ended, remove the element
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })

       
    }

    // Check mark

    if(item.classList[0] === 'complete-btn'){
        // We don't want to chnage the item itself (because that is just the check button)
        // We want to change the whole parent item of that button
         const todo = item.parentElement;
         // We are changing the class of that iten to 'completed'
         todo.classList.toggle('completed');
     }

}