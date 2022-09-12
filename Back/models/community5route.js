const mongoose = require('mongoose')

const Com5Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com5',Com5Schema)