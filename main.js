let count = 0;

function addTask(){
  let taskName = document.getElementById("new-task").value;
  let priority = document.getElementById("priority").value;

  if(taskName != ""){

    let priorityValue = checkPriority(priority);

    let newItem = document.createElement("li");
    newItem.classList.add("list-item");
    newItem.id = `list-item-${count}`
    newItem.innerHTML = 
      `<input type="checkbox" class="list-item-check" id="list-item-checkbox-${count}" onclick="checkboxFunc(${count})">
      <span class="task-name" id="task-${count}">${taskName}</span>
      <span class="task-priority ${priorityValue[1]}" id="priority-${count}">${priorityValue[0]}</span>
      <span class="task-options">
        <button id="edit-button-${count}" onclick="taskEdit(${count},'${priority}')">
          <svg class="pencil" height="20" width="20" viewBox="0 0 512 512">
            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
          </svg>
        </button>
        <button id="delete-button-${count}" onclick="taskDelete(${count})">
          <svg height="20" width="20" viewBox="0 0 448 512">
            <path fill="red" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
          </svg>
        </button>
      </span>`;

    let list = document.getElementById("list");
    list.insertBefore(newItem, list.firstChild);

    document.getElementById("new-task").value = "";
    count++;
  };
};

function checkPriority(priority){
  let priorityColor;
  switch(priority){
    case "high-priority":
      priority = "High Priority";
      priorityColor = "red";
      return [priority, priorityColor];
    case "medium-priority":
      priority = "Medium Priority";
      priorityColor = "yellow";
      return [priority, priorityColor];
    case "low-priority":
      priority = "Low Priority";
      priorityColor = "green";
      return [priority, priorityColor];
  };
}

function taskDelete(num){
  let itemRemoved = document.getElementById(`list-item-${num}`);
  let parent = document.getElementById("list");

  parent.removeChild(itemRemoved);
}

function taskEdit(num, priorityValue){
  let itemEditing = document.getElementById(`task-${num}`).innerText;

  document.getElementById("new-task").value = itemEditing;
  document.getElementById("priority").value = priorityValue;

  let prevButton = document.getElementById("add-button");
  let newButton = document.createElement("button");
  newButton.id = "final-edit-button";
  newButton.innerText = "Edit";
  newButton.setAttribute("onclick", `editFunc(${num})`)

  prevButton.parentNode.replaceChild(newButton, prevButton);
};

function editFunc(num){
  let prevTask = document.getElementById(`list-item-${num}`);
  document.getElementById("list").removeChild(prevTask);

  addTask();

  let prevButton = document.getElementById("final-edit-button");
  let newButton = document.createElement("button");
  newButton.id = "add-button";
  newButton.innerText = "Add";
  newButton.setAttribute("onclick", "addTask()");

  prevButton.parentNode.replaceChild(newButton, prevButton);
}

function changeTheme(){
  let currentTheme = document.getElementById("theme");
  let bodyChildren = document.getElementsByClassName("body-child");
  let themeButton = document.getElementById("theme");
  
  if(currentTheme.classList.contains("light")){
    currentTheme.classList.replace("light","dark");
    bodyChildren[0].style.backgroundColor= "rgb(22,22,22)";
    bodyChildren[1].style.backgroundColor= "rgb(22,22,22)";
    bodyChildren[0].style.color= "white";
    bodyChildren[1].style.color= "white";
    themeButton.style.fill = "white";
  }
  else{
    currentTheme.classList.replace("dark","light");
    bodyChildren[0].style.backgroundColor = "white";
    bodyChildren[1].style.backgroundColor = "white";
    bodyChildren[0].style.color = "black";
    bodyChildren[1].style.color = "black";
    themeButton.style.fill = "black";
  }

};

function checkboxFunc(num){
  let listItem = document.getElementById(`list-item-${num}`);
  let box = document.getElementById(`list-item-checkbox-${num}`);
  let task = document.getElementById(`task-${num}`)
  if(box.checked){
    listItem.style.opacity = "0.4";
    task.style.textDecoration ="line-through";
    listItem.classList.add = "completed";
  }
  else{
    listItem.style.opacity = "1";
    task.style.textDecoration ="none";
    listItem.classList.remove = "completed";
  }
};

function deleteAll(){
  alert("helllo")
  let completedTasks = document.getElementsByClassName("completed");
  let completed = completedTasks.length;

  for(i=0; i<completed; i++){
    let listItem = completedTasks[i];
    completedTasks.parentNode.removeChild(listItem);
  }
}