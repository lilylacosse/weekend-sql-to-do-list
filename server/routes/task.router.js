// We need access to all of these node modules to support the functionality in this task.router.js module.
const express = require("express");
const app = express();
const pool = require("../modules/pool");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// in express, 'Router()' creates route handlers
const router = express.Router();
// we want to export access to express.Router() so we can call the function in our server when the proper mount path is activated. (/task).
module.exports = router;
// In turn, express.Router() (the route handler) will call the route method defined by the request object sent from the client.

//Functions
// Below, I am defining my routes
//CREATE - POST
router.post("/", (req, res) => {
  const task = req.body.task;
  console.log("Task:", task);
  const queryText = `INSERT INTO "to-do" ("task")
        VALUES ($1) ;`;

  pool
    .query(queryText, [task])
    .then((result) => {
      console.log(`Query SUCCESS! : ${queryText}`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Query ERROR: ${queryText}:`, err);
      res.sendStatus(500);
    });
});

//READ - GET
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "to-do";`;
  pool
    .query(queryText)
    .then((result) => {
      console.log(`Query SUCCESS! : ${queryText}`);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`Query ERROR ${queryText}:`, err);
      res.sendStatus(500);
    });
});

// //UPDATE - PUT
// // !!!!!!!!!!!!!!!!!!!!
// router.put("/:COLUMN-NAME", (req, res) => {
//   let what = req.params.what;
//   const queryText = `;`;
//   pool
//     .query(queryText, [what])
//     .then((dbResponse) => {
//       console.log(`Query SUCCESS! : ${queryText}`);
//       res.send(dbResponse.rows);
//     })
//     .catch((err) => {
//       console.log(`Query ERROR ${queryText}:`, err);
//       res.sendStatus(500);
//     });
// });

// //DELETE - DELETE
// // !!!!!!!!!!!!!!!!!!
// router.delete("/", (req, res) => {
//   const queryText = `;`;
//   pool
//     .query(queryText)
//     .then((response) => {
//       console.log(`Query SUCCESS! : ${queryText}`);
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       console.log(`Query ERROR ${queryText}:`, err);
//       res.sendStatus(500);
//     });
// });
