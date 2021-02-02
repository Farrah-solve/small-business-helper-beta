const mongoose = require('mongoose');
// This is to set up the schema table for the info from Login/Register form on the first html page
const Schema = mongoose.Schema;

const userSchema = new Schema({
    companyname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 8
    },
    
    },
    {
        timestamps: true,
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;