const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const tasksList = document.querySelector('.collection');

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);

function deleteTask(e) {
    if(e.target.textContent == 'X') {
        if(confirm('Oled kindel, et soovid taski kustudada?')) {
            e.target.parentElement.remove();
        }
    }
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

    taskInput.value = '';

    console.log(ul);
    e.preventDefault();
}