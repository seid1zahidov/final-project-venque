const mongoose = require('mongoose')

const Com2Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com2',Com2Schema)