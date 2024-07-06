// todoscript.js
// function addTask() {
//     var newTask = document.getElementById("new-task").value;
//     if (newTask !== "") {
//         var taskList = document.getElementById("tasks");
//         var taskItem = document.createElement("li");
//         taskItem.className = "task-item";
        
//         var checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
        
//         var taskText = document.createElement("span");
//         taskText.appendChild(document.createTextNode(newTask));
        
//         var editButton = document.createElement("button");
//         editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
//         editButton.onclick = function() {
//             var newText = prompt("Enter new task text:");
//             if (newText !== null) {
//                 taskText.textContent = newText;
//             }
//         };
        
//         var deleteButton = document.createElement("button");
//         deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
//         deleteButton.onclick = function() {
//             taskList.removeChild(taskItem);
//         };
        
//         taskItem.appendChild(checkbox);
//         taskItem.appendChild(taskText);
//         taskItem.appendChild(editButton);
//         taskItem.appendChild(deleteButton);
        
//         taskList.appendChild(taskItem);
//         document.getElementById("new-task").value = "";
//     }
// }

// function selectAll() {
//     var taskList = document.getElementById("tasks");
//     var checkboxes = taskList.getElementsByTagName("input");
//     for (var i = 0; i < checkboxes.length; i++) {
//         checkboxes[i].checked = true;
        
//     }
    
// }

// function deleteAll() {
//     var taskList = document.getElementById("tasks");
//     while (taskList.firstChild) {
//         taskList.removeChild(taskList.firstChild);
//     }
// }
//  var taskList = document.getElementById("tasks").addEventListener("click", function(event) {
//     var element = event.target;
    
//       element.checked.toggle("completed");
    
//   });

function addTask() {
    var newTask = document.getElementById("new-task").value;
    if (newTask !== "") {
        var taskList = document.getElementById("tasks");
        var taskItem = document.createElement("li");
        taskItem.className = "task-item";

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
            if (this.checked) {
                taskText.style.textDecoration = "line-through";
            } else {
                taskText.style.textDecoration = "none";
            }
        };

        var taskText = document.createElement("span");
        taskText.appendChild(document.createTextNode(newTask));

        var editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editButton.onclick = function() {
            var newText = prompt("Enter new task text:");
            if (newText !== null) {
                taskText.textContent = newText;
            }
        };

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        deleteButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
        document.getElementById("new-task").value = "";
    }
}

function selectAll() {
    var taskList = document.getElementById("tasks");
    var checkboxes = taskList.getElementsByTagName("input");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
        checkboxes[i].onclick(); //update the task 
    }
}

function deleteAll() {
    var taskList = document.getElementById("tasks");
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

