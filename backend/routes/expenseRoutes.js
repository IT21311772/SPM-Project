const express = require('express');
const router = express.Router();
const Trans = require('../models/expenseModel');

// API route for Read Operation using GET
router.get("/docs", (req, res) => {
    Trans.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});

// API route for Update Operation using PUT
router.put("/update/:id", (req, res) => {
    Trans.findByIdAndUpdate(
        { _id: req.params.id},
        {
            transaction: req.body.transaction,
            type: req.body.type,
            amount: req.body.amount,
            date: req.body.date,
            reference: req.body.reference
        }
    )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

// API route for Delete Operation using Delete
router.delete("/delete/:id", (req, res) => {
    Trans.findByIdAndDelete({ _id: req.params.id})
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

module.exports = router;