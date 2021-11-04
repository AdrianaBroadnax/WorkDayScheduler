// const taskList = localStorage.getItem('taskList');
// function myFunction(){
//     var taskListToSave={type:"taskList"}
//     var taskListReadyToSave=JSON.stringify(taskListToSave)
//     localStorage.setItem("taskList", taskListReadyToSave)
// }
// document.getElementById("saveBtn").onclick = function() {myFunction()};

var saveTaskContainer = document.querySelector("#saveTask-container");
var saveBtn = document.querySelector("#save-button");
var clearSaveTask = document.querySelector("#clearAll");

// click event to save local storage 
saveBtn.addEventListener("click", function () {
    console.log("save");
    document.location = "index.html";
});

// const taskList = localStorage.getItem('taskList');
// function myFunction(){
//     var taskListToSave={type:"taskList"}
//     var taskListReadyToSave=JSON.stringify(taskListToSave)
//     localStorage.setItem("taskList", taskListReadyToSave)
// }
// document.getElementById("saveBtn").onclick = function() {myFunction()};


// retrieving saved items from local storage
