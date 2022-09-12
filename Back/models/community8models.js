const mongoose = require('mongoose')

const Com8Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com8',Com8Schema)