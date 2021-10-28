// const taskList = localStorage.getItem('taskList');
function myFunction(){
    var taskListToSave={type:"taskList8"}
    var taskListReadyToSave=JSON.stringify(taskListToSave)
    localStorage.setItem("taskList", taskListReadyToSave)
}
document.getElementById("saveBtn").onclick = function() {myFunction()};