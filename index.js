import editData from "./components/edit.js";
import getRandom3DigitNumber from "./components/randomNumber.js";
import del from "./components/delete.js";
import toggleButton from "./components/background.js";
let body = document.querySelector('#body');
let todo = document.querySelector("#todo");
let date = document.querySelector("#date");
let time = document.querySelector("#time");
let form = document.querySelector("#form");
let table = document.querySelector("#table");
let template = document.querySelector("#template-card-conteiner");

let toggleBtn = document.querySelector('#toggleBtn');
toggleBtn.addEventListener('click', () => toggleButton(toggleBtn, body));

// Initialize an empty array to store todos
let todos = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if(todo.value == '' && date.value == '' && time.value == '') {
    alert('Enter Input Filed')
    todo.style.border = '1px solid red';
    date.style.border = '1px solid red';
    time.style.border = '1px solid red';
  } else {
  todo.style.border = '1px solid black';
  date.style.border = '1px solid black';
  time.style.border = '1px solid black';
  let uniqeNum = getRandom3DigitNumber();
  const cardClone = template.content.cloneNode(true);
  const tableStatus = cardClone.querySelector("#tableStatus");


  // Create a new todo object
  const newTodo = {
    slNo: uniqeNum,
    taskName: todo.value,
    date: date.value,
    time: time.value,
    status: tableStatus.textContent,
  }; 

  
  fillDataInTodo(cardClone, newTodo); // Pass the newTodo object to fillDataInTodo
  todos.push(newTodo); // Add the new todo to the todos array
  table.appendChild(cardClone);

  clearForm(); // Clear form fields after submission
  saveTodosToLocalStorage(); // Save updated todos to local storage
}
});

const fillDataInTodo = (cardClone, todo) => {
  const SlNo = cardClone.querySelector("#slNo");
  const taskName = cardClone.querySelector("#taskName");
  const Date = cardClone.querySelector("#date");
  const Time = cardClone.querySelector("#time");
  const tableStatus = cardClone.querySelector("#tableStatus");

  SlNo.textContent = todo.slNo;
  taskName.textContent = todo.taskName;
  Date.textContent = todo.date;
  Time.textContent = todo.time;
  tableStatus.textContent = todo.status;

  //Edit Button function
  const edit = cardClone.querySelector("#edit");
  let editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editBtn.setAttribute("class", "editBtn");
  edit.appendChild(editBtn);
  editBtn.addEventListener("click", () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    storedTodos.filter((todoOne) => {
      if(todoOne.slNo == SlNo.textContent){
         editData(taskName, Date, Time, tableStatus, editBtn, todoOne, storedTodos);
      }
    });
    
  }
  );

  // delete function
  del(cardClone, SlNo);

};


const clearForm = () => {
  todo.value = "";
  date.value = "";
  time.value = "";
};

const saveTodosToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos)); // Save todos array as JSON
};

// Load todos from local storage on page load (optional)
window.addEventListener("load", () => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos) {
    todos = storedTodos; // Restore data from localStorage
    storedTodos.forEach((todo) => {
      const cardClone = template.content.cloneNode(true);
      fillDataInTodo(cardClone, todo);
      table.appendChild(cardClone);
    });
  }
});

