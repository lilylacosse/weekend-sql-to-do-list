// Dependencies have not been declared, please run these commands in the terminal:
// npm init --yes (-y)
// npm install express
// npm install body-parser
// npm install pg
// npm install --save-dev nodemon
// npm run server

// in package.json:
//,"start": "node server/server.js"
// ,"server": "nodemon node server/server.js"

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("server/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("server/public"));

// Setup the songs router
// to respond to requests from the `/songs` URL
let `<itemOrNoun>Router = require("./routes/<itemOrNoun>.router");
app.use("/<itemOrNoun>", `<itemOrNoun>Router`);

// Start express
const PORT = 5000;
app.listen(PORT, () => {
  console.log("up and running on port", PORT);
});



const PORT = process.env.PORT || 5000;
const koalaRouter = require("./routes/koala.router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("server/public"));

// ROUTES
app.use("/koalas", koalaRouter);

