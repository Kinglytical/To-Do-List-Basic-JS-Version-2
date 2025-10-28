const buttonList = document.querySelector('#button');
const toDoList = document.querySelector('#todo_list');

buttonList.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    const deleteButton = document.createElement('button');
    const inputValue = document.querySelector('.input').value;

    paragraph.textContent = inputValue;
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        toDoList.removeChild(paragraph);
    });
    paragraph.appendChild(deleteButton);
    toDoList.appendChild(paragraph);
});