const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    contact_no: {
        type: String,
        required: true
    },
    avatar: {
        type: Array,
        required: true
    },
    otp:{
        type:Number,
        default : 0
    },
    country: {
        type: String,
        required: true
    },
},
    { timestamps: true }
)
module.exports = mongoose.model("User", UserSchema);