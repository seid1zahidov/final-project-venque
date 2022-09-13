const mongoose = require('mongoose')

const Com9Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com9',Com9Schema)