// const taskList = localStorage.getItem('taskList');
// function myFunction(){
//     var taskListToSave={type:"taskList"}
//     var taskListReadyToSave=JSON.stringify(taskListToSave)
//     localStorage.setItem("taskList", taskListReadyToSave)
// }
// document.getElementById("saveBtn").onclick = function() {myFunction()};

var saveTaskContainer = document.querySelector("#taskContainer");
var saveBtn = document.querySelector("#save-button");
var clearSaveTask = document.querySelector("#clearAll");

// click event to save local storage 
saveBtn.addEventListener("click", function () {
    console.log("save");
    document.location = "index.html";
});

// retrieving saved items from local storage
function getTaskListFromLocalStorage() {
    return JSON.parse(localStorage.getItem("TaskList")) || [];
}

function renderTaskList() {
    var allTaskList = getTaskListFromLocalStorage ();
    saveTaskContainer.innerHTML = "";
    
    for (var i = 0; i < allTaskList.length; i++){
      var taskListReadyToSave = allTaskList[i].taskInput;
    }
}
