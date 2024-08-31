const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: 'FistName is required',
    },
    lastName: {
        type: String,
        trim: true,
        required: 'LastName is required',
    },
    email: {
        type: String,
        trim: true,
        required: 'Email is required',
    },
    password: {
        type: String,
        required: 'Password is required',
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);