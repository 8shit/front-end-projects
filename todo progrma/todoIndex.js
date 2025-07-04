let btnLogin = document.getElementById("do-login");
const idLogin = document.getElementById("login");
const usernameInput = document.getElementById("username");
const originalHTML = idLogin.innerHTML;
let todoList = [];
let completedList = [];
let userName;

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => response.json())
  .then((json) => {
    usersData = json;
  })
  .catch((error) => {
    console.error("error");
  });

const test = () => {
  const enteredUsername = usernameInput.value.toLowerCase();
  const userFound = usersData.find(
    (user) => user.username.toLowerCase() === enteredUsername
  );
  userName = userFound.username;

  if (userFound) {
    getToDo(userFound.id);
  } else {
    idLogin.innerHTML = "<p>Username not found.</p>";
  }
};

btnLogin.addEventListener("click", test);

function getToDo(i) {
  const savedTodos = localStorage.getItem(userName + "_todoList");
  if (JSON.parse(savedTodos)?.length) {
    todoList = JSON.parse(savedTodos);
    printToDo();
  } else {
    fetch(`https://jsonplaceholder.typicode.com/todos`, { method: "GET" })
      .then((response) => response.json())
      .then((todo) => {
        todoList.length = 0;
        todoList = todo.filter((todo) => todo.userId === i);
        let idLIst = todoList.map((todo) => todo.completed);
        idLIst[2] = "jjkj";
        console.log(idLIst);
        console.log(todoList);
        let x = [1, 2, 3];
        let y = x;
        y.push(5);
        console.log(x);
        console.log(y);

        printToDo();
      });
  }
}
function printToDo() {
  localStorage.setItem(userName + "_todoList", JSON.stringify(todoList));
  let htmlContent = "<ul>";
  for (x = 0; x < todoList.length; x++) {
    if (!todoList[x].completed) {
      htmlContent +=
        "<li>" +
        `<span id='span${todoList[x].id}'>'${todoList[x].title}'</span>` +
        `<button class='btn-login' id='edit${todoList[x].id}' onclick='edit(${todoList[x].id})' > Edit</button>` +
        `<input type ='checkbox' name = 'completed' id='completed${todoList[x].id}' onclick='clean(${todoList[x].id})' ></li > `;
    } else {
      htmlContent +=
        "<li>" +
        todoList[x].title +
        "<span style='color:white; font-size:30px;'>&check;</span>" +
        `<input type ='checkbox' name = 'completed' id='completed${todoList[x].id}' style='display:none' ></li>`;
    }
  }
  htmlContent +=
    "<button href='#' class='btn-login' id='do-update' onclick= 'update()' >Update</button></ul>";
  idLogin.innerHTML =
    "<p>We're happy to see you again, </p><h1>" +
    userName +
    "</h1><h2>Here is your to-do list:</h2>" +
    htmlContent +
    "<button type='button' id='logout' style= 'float: right' onclick='Logout()'>Logout</button>";
}

function edit(count) {
  let todoItem = todoList.find((todoList) => todoList.id === count);
  idLogin.innerHTML =
    "<h1>Edit Task</h1>" +
    `</br><input type='text' value='${todoItem.title}' id='editted_task' style='width: 100%'>` +
    "<button type='button' id='save' style= 'float:bottom right; radius: 5px'>Save</button></br>" +
    "<button type='button' id='Back' onclick='printToDo()' style= 'float: right; radius: 5px'>Back</button>";
  const edit_input = document.getElementById("editted_task");

  document.getElementById("save").addEventListener("click", () => {
    todoItem.title = edit_input.value;

    fetch(`https://jsonplaceholder.typicode.com/todos/3`, {
      method: "PUT",
      body: JSON.stringify({ title: edit_input.value }),
    }).then(() => {
      printToDo();
    });
  });
}

async function update() {
  for (const element of completedList) {
    const box = document.getElementById(`completed${element}`);
    console.log(element);
    const editBtn = document.getElementById(`edit${element}`);
    const textBx = document.getElementById(`span${element}`);
    console.log(box);

    await fetch(`https://jsonplaceholder.typicode.com/todos/${element}`, {
      method: "PUT",
      body: JSON.stringify({ completed: true }),
    });
    let todoItem = todoList.find((todoList) => todoList.id === element);
    todoItem.completed = true;
    console.log(todoList);
    console.log(`completed${element}`);
    box.style.display = "none";
    editBtn.style.display = "none";
    textBx.innerHTML +=
      "<span style='color:white; font-size:30px;'>&check;</span>";
  }

  completedList.length = 0;
  localStorage.setItem(userName + "_todoList", JSON.stringify(todoList));
}

function Logout() {
  window.location.reload();
}

function clean(id) {
  completedList.push(id);
  console.log(completedList);
}
