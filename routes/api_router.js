//IMPORT EXPRESS
const express = require("express");
//IMPORT MODELS
const db = require("../models");
//DEFINE EXPRESS ROUTER
const router = express.Router();

//--------
//API ROUTES
//--------
//retrieves saved books
router
    .route("/books")
    .get((req, res) => {
        db.Book.find({})
            .then(dbBook => {
                res.json(dbBook);
            })
            .catch(err => {
                res.json(err);
            });
    });


module.exports = router;