const mongoose = require('mongoose')

const HelpSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Help',HelpSchema)