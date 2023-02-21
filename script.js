let newTaskInput = document.querySelector("#new-task-input");
let form = document.querySelector('form');
let incompleteTaskUl = document.querySelector("#incomplete-ul-items");
let completedTaskUl = document.querySelector(".complete-list ul");

// console.log(newTaskInput, form, incompleteTaskUl, completedTaskUl)


let createTask = function(task) {
 let listItem = document.createElement("li");
 let checkbox = document.createElement("input");
 let label = document.createElement("label");

 label.innerText = task;

 checkbox.type = "checkbox";

 listItem.appendChild(checkbox);
 listItem.appendChild(label);

 return listItem;
}


let addTask = function (event) {
 event.preventDefault();
 let listItem = createTask(newTaskInput.value);

 incompleteTaskUl.appendChild(listItem);
 newTaskInput.value = '';

 //When you click the checkbox.. this will send it to the completed task list

 checkBoxClickEvents(listItem, completedTask)
}

let completedTask = function () {
let listItem = this.parentNode;
let deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Delete';
deleteBtn.className = 'delete';

listItem.appendChild(deleteBtn);


//We need to remove the checkbox from the completed task items. So...

let checkBox = listItem.querySelector('input[type="checkbox"]');
checkBox.remove();

completedTaskUl.appendChild(listItem);

// When the delte button is cliecked we need to remove the item from the completed task... So...

deleteBtnClickEvent(listItem, deleteTask)

}

let deleteBtnClickEvent = function(taskItem, deleteBtnClicked) {
 let deleteBtn = taskItem.querySelector('.delete');
 deleteBtn.onclick = deleteBtnClicked;
}

let deleteTask = function () {
 let listItem = this.parentNode;
 let ul = listItem.parentNode;
 ul.removeChild(listItem);
}

let checkBoxClickEvents = function (taskItem, checkBoxClick) {
let checkBox = taskItem.querySelector('input[type="checkbox"]');
checkBox.onchange = checkBoxClick;
}

//To remove the hardcoded tasks...

for (let i=0; i<incompleteTaskUl.children.length; i++ ) {
 checkBoxClickEvents(incompleteTaskUl.children[i], completedTask)
 
}


for (let i = 0; i < completedTaskUl.children.length; i++) {
  deleteBtnClickEvent(completedTaskUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask)

