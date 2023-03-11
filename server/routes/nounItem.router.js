const pool = require("../modules/pool");
const express = require("express");
const router = express.Router();

//Functions
//200 - ok
//201 - created
//404 - not found
//500 - error

//CREATE - POST
router.post("/", (req, res) => {
  const newWHAT = req.body;
  const queryText = `INSERT INTO <!!!!> (columns,)
        VALUES ($1,$2) ;`;

  pool
    .query(queryText, [newWHAT.key])
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
  const queryText = `SELECT * FROM <!!!!>;`;
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
// !!!!!!!!!!!!!!!!!!!!
router.put("/:COLUMN-NAME", (req, res) => {
  let what = req.params.what;
  const queryText = `;`;
  pool
    .query(queryText, [what])
    .then((dbResponse) => {
      console.log(`Query SUCCESS! : ${queryText}`);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(`Query ERROR ${queryText}:`, err);
      res.sendStatus(500);
    });
});

//DELETE - DELETE
// !!!!!!!!!!!!!!!!!!
router.delete("/", (req, res) => {
  const queryText = `;`;
  pool
    .query(queryText)
    .then((response) => {
      console.log(`Query SUCCESS! : ${queryText}`);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`Query ERROR ${queryText}:`, err);
      res.sendStatus(500);
    });
});
