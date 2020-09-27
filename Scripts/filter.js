const filterTodos = document.getElementById('filter-todo');

const filter = (e) => {
  const todos = todoList.childNodes;
  console.log(e.target.value);
  todos.forEach((todo) => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'none';
        } else {
          todo.style.display = 'flex';
        }
        break;
    }
  });
};

filterTodos.addEventListener('click', filter);
