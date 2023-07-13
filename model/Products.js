const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    Category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
},
    { timestamps: true }
)
module.exports = mongoose.model("Prduct", ProductSchema);