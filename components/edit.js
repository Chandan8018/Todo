
const editData = (taskName, Date, Time, tableStatus, editBtn, todoOne, storedTodos) => {
  editBtn.disabled = true;
  //Todo Update Input
  let todoUpdateInput = document.createElement("input");
  let todoUpdatebutton = document.createElement("button");
  todoUpdatebutton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  todoUpdatebutton.setAttribute("class", "updateBtn");
  todoUpdateInput.value = taskName.textContent;
  taskName.textContent = undefined;
  taskName.append(todoUpdateInput, todoUpdatebutton);
  todoUpdatebutton.addEventListener("click", () => {
    taskName.innerHTML = "";
    todoOne.taskName = todoUpdateInput.value;
    let text = document.createTextNode(todoOne.taskName);
    localStorage.setItem("todos", JSON.stringify(storedTodos)); // save in local store
    taskName.appendChild(text);
    todoUpdatebutton.disabled = true;
    disabledBtn();
  });

  //Date update Input
  let todoDateUpdateInput = document.createElement("input");
  todoDateUpdateInput.setAttribute("type", "date");
  let todoDateUpdatebutton = document.createElement("button");
  todoDateUpdatebutton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  todoDateUpdatebutton.setAttribute("class", "updateBtn");
  todoDateUpdateInput.value = Date.textContent;
  Date.textContent = undefined;
  Date.append(todoDateUpdateInput, todoDateUpdatebutton);
  todoDateUpdatebutton.addEventListener("click", () => {
    Date.innerHTML = "";
    todoOne.date = todoDateUpdateInput.value;
    let text = document.createTextNode(todoOne.date);
    localStorage.setItem("todos", JSON.stringify(storedTodos)); // save in local store
    Date.appendChild(text);
    todoDateUpdatebutton.disabled = true;
    disabledBtn();
  });

  //Time update Input
  let todoTimeUpdateInput = document.createElement("input");
  todoTimeUpdateInput.setAttribute("type", "time");
  let todoTimeUpdatebutton = document.createElement("button");
  todoTimeUpdatebutton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  todoTimeUpdatebutton.setAttribute("class", "updateBtn");
  todoTimeUpdateInput.value = Time.textContent;
  Time.textContent = undefined;
  Time.append(todoTimeUpdateInput, todoTimeUpdatebutton);
  todoTimeUpdatebutton.addEventListener("click", () => {
    Time.innerHTML = "";
    todoOne.time = todoTimeUpdateInput.value;
    let text = document.createTextNode(todoOne.time);
    localStorage.setItem("todos", JSON.stringify(storedTodos)); // save in local store
    Time.appendChild(text);
    todoTimeUpdatebutton.disabled = true;
    disabledBtn();
  });

  //Status Update

  //create element
  let select = document.createElement("select");
  let option1 = document.createElement("option");
  option1.setAttribute("value", "Todo");
  option1.appendChild(document.createTextNode(option1.value));
  let option2 = document.createElement("option");
  option2.setAttribute("value", "In Progress");
  option2.appendChild(document.createTextNode(option2.value));
  let option3 = document.createElement("option");
  option3.setAttribute("value", "Complete");
  option3.appendChild(document.createTextNode(option3.value));
  select.append(option1, option2, option3);

  let todoStatusUpdatebutton = document.createElement("button");
  todoStatusUpdatebutton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  todoStatusUpdatebutton.setAttribute("class", "updateBtn");
  tableStatus.textContent = undefined;
  tableStatus.append(select, todoStatusUpdatebutton);
  todoStatusUpdatebutton.addEventListener("click", () => {
    tableStatus.innerHTML = "";
    let span = document.createElement("span");
    todoOne.status = select.value;
    let text = document.createTextNode(todoOne.status);
    localStorage.setItem("todos", JSON.stringify(storedTodos)); // save in local store
    span.appendChild(text);
    tableStatus.appendChild(span);
    todoStatusUpdatebutton.disabled = true;
    disabledBtn();
  });

  const disabledBtn = () => {
    if (
      todoUpdatebutton.disabled === true &&
      todoDateUpdatebutton.disabled === true &&
      todoTimeUpdatebutton.disabled === true &&
      todoStatusUpdatebutton.disabled === true
    ) {
      editBtn.disabled = false;
      todoUpdatebutton.disabled = false;
      todoDateUpdatebutton.disabled = false;
      todoTimeUpdatebutton.disabled = false;
      todoStatusUpdatebutton.disabled = false;
    }
};
};

 export default editData;