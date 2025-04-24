const todolist = [{
  name: 'Make dinner',
  dueDate:'2022-12-22' },
  { name :'Wash Dishes',
  dueDate:'2021-12-22'}];

renderTodoList()

function renderTodoList() {
  let todolistHTML = '';
  todolist.forEach((todoObject,index) => {
    const { name } = todoObject;
    const { dueDate }= todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onclick="
      todolist.splice(${index},1);
      renderTodoList();
    ">
    Delete</button>
    </div>
    `;
    todolistHTML += html;
  });
  document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;
}



function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todolist.push({name, dueDate});
  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList()
}
