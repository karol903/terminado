

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDueDate = document.getElementById('taskDueDate').value;

    const task = {
        name: taskName,
        description: taskDescription,
        dueDate: taskDueDate,
        estado: 'Pendiente'
    };

    addTaskToList(task);

    // Clear the form fields
    document.getElementById('taskForm').reset();
}

function addTaskToList(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <strong>${task.name}</strong>
        <p>${task.description}</p>
        <p>Fecha: ${task.dueDate}</p>
        <p>Estado: ${task.estado}</p>
        <button onclick="editTask(this)">Editar</button>
        <button onclick="deleteTask(this)">Eliminar</button>
        <button onclick="completeTask(this)">Completado</button>
    `;

    taskList.appendChild(li);
}

function editTask(button) {
    const li = button.parentElement;
    const taskName = li.querySelector('strong').textContent;
    const taskDescription = li.querySelector('p:nth-child(2)').textContent;
    const taskDueDate = li.querySelector('p:nth-child(3)').textContent.split(': ')[1];

    const newTaskName = prompt('Edit Task Name:', taskName);
    const newTaskDescription = prompt('Edit Task Description:', taskDescription);
    const newTaskDueDate = prompt('Edit Fecha:', taskDueDate);

    if (newTaskName !== null && newTaskName !== '') {
        li.querySelector('strong').textContent = newTaskName;
        li.querySelector('p:nth-child(2)').textContent = newTaskDescription;
        li.querySelector('p:nth-child(3)').textContent = `Fecha: ${newTaskDueDate}`;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

function completeTask(button) {
    const li = button.parentElement;
    li.classList.add('completed');
    li.querySelector('p:last-child').textContent = 'Status: Completed';
    button.remove(); // Remove the "Completado" button
}