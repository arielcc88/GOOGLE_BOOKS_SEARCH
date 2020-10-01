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

//saving books to DB
router
    .route("/books")
    .post((req, res) => {
        db.Book.create(req.body)
        .then((dbBook) => {
            res.json({statusCode: 200, msg: "Saved Successfully!"})
        })
        .catch(err => {
            res.json(err);
        })
    });

//deleting saved books.
router
    .route("/books/:id")
    .delete( (req, res) => {
        db.Book.deleteOne({_id: req.params.id})
        .then(() => {
            res.json({statusCode: 200, msg: "Removed Successfully!"})
        })
        .catch((err) => {
            res.json(err);
        })
    });


module.exports = router;