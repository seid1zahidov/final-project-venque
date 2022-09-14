const mongoose = require('mongoose')

const Com11Schema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title :{
        type : String,
        required : true
    },
    text :{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Com11',Com11Schema)