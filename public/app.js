async function addTask() {
    const taskInput = document.getElementById('taskInput');

    await fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: taskInput.value })
    });

    loadTasks();
    taskInput.value = '';
}

async function loadTasks() {
    const response = await fetch('/tasks');
    const tasks = await response.json();

    const list = document.getElementById('taskList');
    list.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerText = task;
        list.appendChild(li);
    });
}

loadTasks();
