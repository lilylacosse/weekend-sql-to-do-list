$(document).ready(onReady);

function onReady() {
  console.log("JQ");
  //listeners
  $("#addTaskBtn").on("click", addTask);
  //delegating listeners
  // $("").on("", "", PUT());
  // $("").on("", "", DELETE());
  // //Inital Get
  // GET();
}
//Global Variables

//Functions
//CREATE - POST
// I like to start with POST because it's first in CRUD.
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
      // GET();
    })
    .catch((err) => {
      console.log("POST() Failed:", err);
    });
  console.log("END POST");
}
// //READ - GET
// function GET() {
//   $.ajax({ method: "GET", url: "/nounItem" })
//     .then((response) => {
//       console.log("Successful GET()");
//       // Always render data to the DOM after a successful get!
//       // All methods are followed by a get, so this will be reused ad naseum
//       render();
//     })
//     .catch((err) => {
//       console.log("GET() Failed:", err);
//     });
// }
// // render()
// function render() {
//   //first get rid of previously rendered values
//   $("").empty();
//   // then loop through new data and append to DOM
//   for (let x of xyz) {
//     //are there conditions on what you'd like to show up?
//     if (true) {
//       $("").append();
//     } else {
//       $("").append();
//     }
//   }
// }
// //UPDATE - PUT
// //must grab identifier and data
// function PUT() {
//   let newWHAT = { id: "${}", change: "${}" };
//   $.ajax({ method: "PUT", url: "", data: newWHAT })
//     .then((response) => {
//       console.log("Successful PUT()");
//       GET();
//     })
//     .catch((err) => {
//       console.log("PUT() Failed:", err);
//     });
// }
// //DELETE - DELETE
// function DELETE() {
//   $.ajax()
//     .then((response) => {
//       console.log("Successful DELETE()");
//       GET();
//     })
//     .catch((err) => {
//       console.log("DELETE() Failed:", err);
//     });
// }
