// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Do nothing if input is empty

    // Create task item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="remove-btn">Remove</button>
    `;

    // Add event listener to remove button
    taskItem.querySelector('.remove-btn').addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Add event listener to mark task as completed
    taskItem.querySelector('.task-text').addEventListener('click', () => {
        taskItem.querySelector('.task-text').classList.toggle('completed');
    });

    // Append task item to the list
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = '';
}

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
