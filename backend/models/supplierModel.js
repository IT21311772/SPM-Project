const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        product:{
            type: String,
            required: true
        },
        contact:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        status:{
            type: String,
            required: true
        },
        date:{
            type: String,
            required: true
        },
        quantity:{
            type: Number,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("suppliers", supplierSchema);