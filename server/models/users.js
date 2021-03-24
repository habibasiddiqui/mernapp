const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'faiza',
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        default: 'faz.pak@gmail.com',
    },
    pwd: {
        type: String,
        default: '1111',
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    role: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User
