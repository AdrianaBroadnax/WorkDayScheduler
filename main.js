// const taskList = localStorage.getItem('taskList');
function myFunction(){
    var taskListToSave={am9:"I eat breakfast", am10:"Meeting with supervisor", am11:"Look for overdue tasks", am8:"taskList8"}
    var taskListReadyToSave=JSON.stringify(taskListToSave)
    localStorage.setItem("taskList", taskListReadyToSave)
}
document.getElementById("saveBtn").onclick = function() {myFunction()};