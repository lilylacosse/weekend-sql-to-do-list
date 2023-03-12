$(document).ready(onReady);

function onReady() {
  console.log("JQ");
  //listeners
  $("#addTaskBtn").on("click", addTask);
  //delegating listeners
  $("#toDoList").on("click", ".completeBtn", taskComplete);
  $("#toDoList").on("click", ".deleteBtn", taskToDelete);
  //Inital Get
  getTasks();
}
//Global Variables

//Functions
//CREATE - POST
// We POST first because we may not start with any data in the database
function addTask() {
  console.log("START POST");
  // collect the appropriate data to send via the POST
  let taskText = $("#task").val();
  let newTask = { task: `${taskText}` };
  console.log("newTask:", newTask);
  $.ajax({ method: "POST", url: "/task", data: newTask })
    .then((response) => {
      console.log("Successful POST()");
      //always want to send back the updated data after it has been posted to the database
      getTasks();
    })
    .catch((err) => {
      console.log("POST() Failed:", err);
    });
  console.log("END POST");
}
//READ - GET
// All methods are followed by a get, so this will be reused ad naseum
function getTasks() {
  $.ajax({ method: "GET", url: "/task" })
    .then((response) => {
      console.log("Successful getTasks()", response);
      // Always render data to the DOM after a successful get!
      render(response);
    })
    .catch((err) => {
      console.log("getTasks() Failed:", err);
    });
}

// // render(response)
//are there conditions on what you'd like to show up?
//     if (true) {
//       $("").append();
//     } else {
//       $("").append();
//     }
function render(response) {
  console.log("response:", response);
  //first get rid of previously rendered values
  $("#toDoList").empty();
  // then loop through new data and append to DOM
  for (let i of response) {
    console.log("i:", i);
    $("#toDoList").append(
      `<li><span class="task">${i.task}</span><button data-id=${i.id} data-complete=${i.complete} class="completeBtn">Complete</button><button data-id=${i.id} class="deleteBtn">Delete</button></li>`
    );
  }
}

//UPDATE - PUT
//must grab identifier and data
function taskComplete() {
  let taskStatus = { taskStat: $(this).data().complete };
  console.log("taskStatus:", taskStatus);
  let thisId = $(this).data().id;
  console.log("thisId", thisId);
  $.ajax({ method: "PUT", url: `/task/${thisId}`, data: taskStatus })
    .then((response) => {
      console.log("Successful PUT()");
      getTasks();
    })
    .catch((err) => {
      console.log("PUT() Failed:", err);
    });
}

//DELETE - DELETE
function taskToDelete() {
  let thisID = $(this).data();
  console.log("thisID", thisID);
  let idToDelete = thisID.id;
  console.log("idToDelete:", idToDelete);
  $.ajax({ method: "DELETE", url: `/task/${idToDelete}` })
    .then((response) => {
      console.log("Successful DELETE()");
      getTasks();
    })
    .catch((err) => {
      console.log("DELETE() Failed:", err);
    });
}
