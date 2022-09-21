const mongoose = require('mongoose')

const supportSchema = new mongoose.Schema({
    idi: { 
        type: String, 
        required: true
    },
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Support',supportSchema)