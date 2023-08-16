const mongoose = require('mongoose');

const expenseModel = mongoose.Schema(
    {
        expense:{
            type: String,
            required: true,
        },
        amount:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Expenses", expenseModel);