const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const router = require('./routes/Images');
const shopimgg = require('./routes/Shopimgroute');
const Cards = require('./routes/Cards');
const Help = require('./routes/Helproute');
const Helpinput = require('./routes/Helpinput');
const Com1 = require('./routes/Community1');

// a
const app = express();

//Middleware
app.use(cors())
app.use(express.json())
app.use('/image',router)
app.use('/shopimg',shopimgg)
app.use('/Card',Cards)
app.use('/Help',Help)
app.use('/Helpinput',Helpinput)
app.use('/Community1',Com1)


mongoose.connect('mongodb+srv://Seid:sjEfusrjE5g19Xsv@cluster0.89klq35.mongodb.net/venque?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(3002)
})
.catch((err) => console.log(err))













