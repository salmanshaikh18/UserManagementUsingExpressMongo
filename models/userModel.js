const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxLength: [20, 'Name should be less than 20 char']
    },
    email: {
        type: String,
        required: [true, 'Emial is required'],
        unique: true
    }, 
    password: {
        type: Number,
        required: [true, 'password is required'],
        unique: [true, 'password should be unique']
    }
})

module.exports = mongoose.model("Userpro", userSchema)
