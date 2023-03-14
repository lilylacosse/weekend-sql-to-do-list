// Require the express module that comes pre-written with node.js so we can access the express()
const express = require("express");
// Rename the express() for convenience
const app = express();
// Need body-parser to translate the request object back into JavaScript so we can work with it.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// taskRouter imports our router module, our router module gives us access to the function express.Router() in this, our server module.
const taskRouter = require("./routes/task.router");

//express method 'use()' creates a mount path
// this mount path serves our static files when a user connects to port 5000 on our localhost server
app.use(express.static("server/public"));
// When the URL in our request from the client matches the URL in the mount path on the server, app.use directs us into the file located at that URL and calls the function we exported inside of the file we are now located in.
//  In this case, calls express.Router() inside of task.router.js
app.use("/task", taskRouter);

// Start express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Listening on Port:", PORT);
});
