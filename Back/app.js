const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const router = require('./routes/Images');
const cart = require('./routes/Carts');

const app = express();

//Middleware
app.use(cors())
app.use(express.json())
app.use('/image',router)
app.use('/cart',cart)

mongoose.connect('mongodb+srv://Seid:sjEfusrjE5g19Xsv@cluster0.89klq35.mongodb.net/venque?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(3004)
})
.catch((err) => console.log(err))













