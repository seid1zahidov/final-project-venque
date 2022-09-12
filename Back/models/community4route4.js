const mongoose = require('mongoose')

const Com4Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com4',Com4Schema)