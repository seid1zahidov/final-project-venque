const mongoose = require('mongoose')

const tecnoSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('First',tecnoSchema)