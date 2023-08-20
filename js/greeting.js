
const loginInput = document.querySelector(".name");
const loginForm = document.querySelector("#login");
const greeting = document.querySelector("#greeting");
const loginBtn = document.querySelector("form button");
todoForm.classList.add("hidden");

loginBtn.addEventListener("click", logIn);

function logIn(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const name = loginInput.value;
  console.log(name);
  if (name != "") {
    localStorage.setItem("username", name);
    printGreeting();
  } else {
    greeting.innerText = "Please Write your name!";
    loginForm.classList.remove("hidden");
  }
}

function printGreeting() {
  const username = localStorage.getItem("username");
  greeting.innerText = `Hello ${username}`;
  loginForm.classList.add("hidden");
  todoForm.classList.remove("hidden")
}

const savedUser = localStorage.getItem("username");
if (savedUser !== null) {
  printGreeting();
} else {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", logIn);
}
