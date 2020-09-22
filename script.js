const todoInput = document.querySelector('input');
const addNewTodo = document.querySelector('button');
const todoList = document.querySelector('.todos');

const resetInput = () => {
  todoInput.value = '';
};
const addTodo = (e) => {
  e.preventDefault();

  if (todoInput.value.trim() !== '') {
    const todoWrapper = document.createElement('div');
    todoWrapper.classList.add('todo-wrapper');

    const todo = document.createElement('li');
    todo.textContent = `${todoInput.value}`;
    todoWrapper.appendChild(todo);

    const completedBtn = document.createElement('button');
    completedBtn.classList.add('checked');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleted');
    completedBtn.innerHTML = ` <i class="fas fa-check fa-2x"></i>`;
    deleteBtn.innerHTML = ` <i class="fas fa-trash fa-2x"></i>`;

    todoWrapper.appendChild(completedBtn);
    todoWrapper.appendChild(deleteBtn);
    todoList.appendChild(todoWrapper);
    resetInput();

    deleteBtn.addEventListener('click', deleteCheckTodo);
    completedBtn.addEventListener('click', deleteCheckTodo);
  } else {
    alert('Please provide some text');
    return;
  }
};

const deleteCheckTodo = (e) => {
  const item = e.target;
  if (item.classList[0] === 'deleted') {
    const todoWrapper = item.parentElement;
    todoWrapper.classList.add('fade');
    todoWrapper.addEventListener('transitionend', () => {
      todoWrapper.remove();
    });
  } else if (item.classList[0] === 'checked') {
    const todo = item.previousElementSibling;
    todo.classList.toggle('line');
  }
};

addNewTodo.addEventListener('click', addTodo);
