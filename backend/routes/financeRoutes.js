const express = require('express');
const router = express.Router();
const Finance = require('../models/financeModel');

// Create API route for Create method in CRUD Operations
router.post("/add", async (req, res) => {
    try {
        const finance = await Finance.create(req.body);
        res.status(201).json(finance);
        console.log(finance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Could not add transaction'});
    }
});

// Create API route for Read method in CRUD Operations
router.get("/trans", async (req, res) => {
    try {
        const finances = await Finance.find();
        res.json(finances);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Could not retrieve finance records'});
    }
});



// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedFinance = await Finance.findByIdAndDelete(req.params.id);
        if (!deletedFinance) {
            return res.status(404).json({ error: 'Transaction not found'});
        }
        res.json(deletedFinance);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Could not delete transaction'});
    }
});

// Create API route for Update method in CRUD Operations
router.put("/update/:id", async (req, res) => {
   try {
    const updatedFinance = await Finance.findByIdAndUpdate(req.params.id, req.body, { new: true});
    if (!updatedFinance) {
        return res.status(404).json({ error: 'Transaction not found'});
    }
    res.json(updatedFinance);
   } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Could not update finance record'});
   }     
});

module.exports = router;