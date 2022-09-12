const mongoose = require('mongoose')

const Com3Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com3',Com3Schema)