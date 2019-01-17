const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = form.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList'); // ul

const TODOS_LS = 'toDos';

function paintToDo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  delBtn.innerText = '❌';
  const span = document.createElement('span');
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);

}

function handleSubmit(event) {
  event.preventDefault();
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
   // handleSubmit();
  }
}


function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();
