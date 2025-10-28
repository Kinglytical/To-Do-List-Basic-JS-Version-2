const buttonlist = document.querySelector('#button');
const toDoList = document.querySelector('#todo_list');

function addTask() {
    const li = document.createElement('li');
    const value = document.querySelector('.input').value;
    const text = document.createTextNode(value);
    li.appendChild(text);

    if (value === '') {
        alert('please enter a task');
    } else {
        toDoList.appendChild(li);
    }
}

buttonlist.addEventListener('click', addTask);