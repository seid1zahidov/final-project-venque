const mongoose = require('mongoose')

const Com10Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com10',Com10Schema)