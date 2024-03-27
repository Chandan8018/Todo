
const del = (cardClone, SlNo) => {
  const del = cardClone.querySelector("#del");
  let delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  delBtn.setAttribute("class", "delBtn");
  del.appendChild(delBtn);
  delBtn.addEventListener("click", () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const filteredTodos = storedTodos.filter((todo) => todo.slNo !== SlNo.textContent);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    del.parentNode.remove();
  });
}

export default del;