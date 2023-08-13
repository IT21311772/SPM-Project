const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Use the middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors);

// Connect the database
mongoose.connect("mongodb+srv://spm:spm-db@spm.rirfslk.mongodb.net/").catch((err) => console.log(err));

// Check the Server
app.listen(3001, function() {
    console.log("Server is running");
});