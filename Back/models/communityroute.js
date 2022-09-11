const mongoose = require('mongoose')

const Com1Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com1',Com1Schema)