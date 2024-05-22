function addTask(){
  let taskName = document.getElementById("new-task").value;
  let priority = document.getElementById("priority").value;

  let priorityColor;
  switch(priority){
    case "high-priority":
      priority = "High Priority";
      priorityColor = "red";
      break;
    case "medium-priority":
      priority = "Medium Priority";
      priorityColor = "yellow";
      break;
    case "low-priority":
      priority = "Low Priority";
      priorityColor = "green";
      break;
  }

  let newItem = document.createElement("li");
  newItem.classList.add("list-item");
  newItem.innerHTML = 
    `<input type="checkbox" class="list-item-check">
     <span class="task-name">${taskName}</span>
     <span class="task-priority ${priorityColor}">${priority}</span>`;

  let list = document.getElementById("list");
  list.insertBefore(newItem, list.firstChild);
}