const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        taskInput.value = '';
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
function updateTask(index) {
    const newTaskText = prompt('Edit task:', tasks[index].text);
    if (newTaskText !== null) {
        tasks[index].text = newTaskText.trim();
        renderTasks();
    }
}


function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onchange="toggleTaskStatus(${index})" ${task.completed ? 'checked' : ''}>
            <span>${task.text}</span>
            <button onclick="updateTask(${index})" style="background-color:blue">Update</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

renderTasks();