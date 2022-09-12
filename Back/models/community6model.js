const mongoose = require('mongoose')

const Com6Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com6',Com6Schema)