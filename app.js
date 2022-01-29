const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

form.addEventListener('submit', addTask);

function addTask(e) {
    const task = taskInput.value;
    console.log(task);
    e.preventDefault();
}