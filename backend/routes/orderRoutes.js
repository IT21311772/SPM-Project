const express = require('express')
const router = express.Router();
const Order = require('../models/orderModel');

// Create API route for Create method in CRUD Operations
router.post("/addorder", (req, res) => {
    Order.create({
        name: req.body.name,
        product: req.body.product,
        date: req.body.date,
        quantity: req.body.quantity,
        tprice: req.body.tprice,
        status: req.body.status,
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

// Create API route for Read method in CRUD Operations
router.get("/ords", (req, res) => {
    Order.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});

// Create API route for Delete method in CRUD Operations
router.delete("/delete/:id", (req, res) => {
    //create route for delete
    Order.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
  });

  // Create API route for Update method in CRUD Operations
router.put("/update/:id", (req, res) => {
    Order.findByIdAndUpdate (
        { _id: req.params.id},
        {
            name: req.body.name,
            product: req.body.product,
            date: req.body.date,
            quantity: req.body.quantity,
            tprice: req.body.tprice,
            status: req.body.status,
        }
    )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
        
});

module.exports = router;
