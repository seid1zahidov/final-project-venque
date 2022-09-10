const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const router = require('./routes/Images');
const cart = require('./routes/Carts');
const shopimgg = require('./routes/Shopimgroute');
const Cards = require('./routes/Cards');

// a
const app = express();

//Middleware
app.use(cors())
app.use(express.json())
app.use('/image',router)
app.use('/cart',cart)
app.use('/shopimg',shopimgg)
app.use('/Card',Cards)


mongoose.connect('mongodb+srv://Seid:sjEfusrjE5g19Xsv@cluster0.89klq35.mongodb.net/venque?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(3002)
})
.catch((err) => console.log(err))













