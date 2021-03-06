const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const tasksList = document.querySelector('.collection');
const delTasksBtn = document.querySelector('#del-tasks')

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
delTasksBtn.addEventListener('click', deleteTasks);
document.addEventListener('DOMContentLoaded', getTasksFromLS);

function getTasksFromLS() {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function (tasksElement) {
        const li = document.createElement('li');

        li.className = 'collection-item';

        const text = document.createTextNode(tasksElement);
        li.appendChild(text);

        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.className = 'secondary-content';
        link.appendChild(document.createTextNode('X'));

        li.appendChild(link);

        const ul = document.querySelector('.collection');
        ul.appendChild(li);
    });
}

function deleteTask(e) {
    if (e.target.textContent == 'X') {
        if (confirm('Oled kindel, et soovid taski kustudada?')) {
            e.target.parentElement.remove();
            task = e.target.parentElement.firstChild.textContent;
            deleteTaskFromLS(task);
        }
    }
}

function deleteTasks(e) {
    if (e.target.textContent == 'Clear All Tasks') {
        if (confirm('Oled kindel, et soovid kõik taskid kustudada?')) {
            while (tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            deleteAllTasksFromLS(task);
        }
    }
}

function deleteTaskFromLS(task) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function (tasksElement, index) {
        if (tasksElement === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteAllTasksFromLS() {
    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    localStorage.removeItem('tasks')
}

function addTask(e) {
    const task = taskInput.value;
    const li = document.createElement('li');

    li.className = 'collection-item';

    const text = document.createTextNode(task);
    li.appendChild(text);

    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.className = 'secondary-content';
    link.appendChild(document.createTextNode('X'));

    li.appendChild(link);

    const ul = document.querySelector('.collection');
    ul.appendChild(li);


    saveTaskToLS(task);

    taskInput.value = '';

    console.log(ul);
    e.preventDefault();
}

function saveTaskToLS(task) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
}