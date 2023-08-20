const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todoForm input");

let todoArr = [];

function handleSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    text: todo,
    id: Date.now(),
  };
  todoArr.push(todoObj);
  printTodo(todoObj);
  saveToDos();
}

function printTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "❤";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArr = todoArr.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem("todo", JSON.stringify(todoArr));
}

todoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem("todo");
if (savedToDos !== null) {
  const newTodo = JSON.parse(savedToDos);
  todoArr = newTodo;
  todoArr.forEach((todo) => printTodo(todo));
}
