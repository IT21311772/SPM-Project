const mongoose = require('mongoose');

const incomeModel = mongoose.Schema(
    {
        income:{
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

module.exports = mongoose.model("Income", incomeModel);