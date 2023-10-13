// Import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

// Use the middlewares to get the data to backend
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// Import the routes
const financeRoutes = require('./routes/financeRoutes');
const userRoutes = require('./routes/userRoutes');

// Routes
app.use("/api/Fin", financeRoutes);
app.use("/api/User", userRoutes);
const supplierRoutes = require('./routes/supplierRoutes');
const orderRoutes = require('./routes/orderRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');


// Routes
app.use("/api/Sup", supplierRoutes);
app.use("/api/Ord", orderRoutes)
app.use("/api/Product", inventoryRoutes);

// Connect the database
mongoose
    .connect("mongodb+srv://spm:spm-db@spm.rirfslk.mongodb.net/")
    .catch((err) => console.log(err));

// router.get("/", (req, res) => {
//     res.send("Express is here");
// });



// Check the Server
app.listen(3001, function () {
    console.log("Server is running");
});

app.listen(8000, function () {
    console.log("Port connected");
});