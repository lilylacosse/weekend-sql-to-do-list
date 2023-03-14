// We need access to all of these node modules to support the functionality in this task.router.js module.
const express = require("express");
const pool = require("../modules/pool");
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

//UPDATE - PUT
router.put("/:id", (req, res) => {
  let idToAlter = req.params.id;
  console.log("idToAlter:", idToAlter);
  let complete = req.body.taskStat;
  complete = !complete;
  console.log("complete:", complete);
  const queryText = `UPDATE "to-do" SET complete=$1 WHERE id=$2;`;
  // could ALSO use: "complete" = not complete
  pool
    .query(queryText, [true, idToAlter])
    .then((dbResponse) => {
      console.log(`Query SUCCESS! : ${queryText}`);
      res.send(dbResponse.rows);
    })
    .catch((error) => {
      console.log(`Query ERROR ${queryText}:`, error);
      res.sendStatus(500);
    });
});

//DELETE - DELETE
router.delete("/:id", (req, res) => {
  const idToDelete = req.params.id;
  console.log("idToDelete:", idToDelete);
  const queryText = `DELETE FROM "to-do" WHERE id=$1 ;`;
  pool
    .query(queryText, [idToDelete])
    .then((response) => {
      console.log(`Query SUCCESS! : ${queryText}`);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`Query ERROR ${queryText}:`, err);
      res.sendStatus(500);
    });
});
