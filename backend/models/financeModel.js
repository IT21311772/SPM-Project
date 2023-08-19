const mongoose = require('mongoose');

const financeSchema = mongoose.Schema(
    {
        transaction:{
            type: String,
            required: true,
        },
        type:{
            type: String,
            required: true,
        },
        amount:{
            type: Number,
            required: true,
        },
        date:{
            type: String,
            required: true,
        },
        reference:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Finance", financeSchema);