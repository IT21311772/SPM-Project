const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

// Use the middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Import the routes
const financeRoutes = require('./routes/financeRoutes');
const incomeRoute = require('./routes/incomeRoutes');
const expenseRoute = require('./routes/expenseRoutes');

// Write the common routes
app.use("/api/Fin", financeRoutes);
app.use("/api/in", incomeRoute);
app.use("/api/ex", expenseRoute);

// Connect the database
mongoose.connect("mongodb+srv://spm:spm-db@spm.rirfslk.mongodb.net/").catch((err) => console.log(err));

// Check the Server
app.listen(3001, function() {
    console.log("Server is running");
});

app.listen(8000, function () {
    console.log("Port connected");
});