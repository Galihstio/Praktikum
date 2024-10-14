
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const successMessage = document.getElementById('successMessage');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <div>
            <button class="editBtn">✏️</button>
            <button class="deleteBtn">🗑️</button>
        </div>
    `;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.querySelector('.editBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        const newTask = prompt('Edit your task', taskText);
        if (newTask) {
            li.firstChild.textContent = newTask;
        }
    });

    li.querySelector('.deleteBtn').addEventListener('click', (e) => {
        e.stopPropagation();
        li.remove();
    });

    taskList.appendChild(li);

    successMessage.textContent = "Todo item Created Successfully.";
    setTimeout(() => successMessage.textContent = "", 2000);

    taskInput.value = '';
}
