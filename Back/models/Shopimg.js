const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Shopimg',ShopSchema)