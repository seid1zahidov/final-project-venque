const mongoose = require('mongoose')

const Com7Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Com7',Com7Schema)