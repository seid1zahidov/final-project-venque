const express = require('express');
var cors = require('cors')
const mongoose = require('mongoose');
const router = require('./routes/Images');
const shopimgg = require('./routes/Shopimgroute');
const Cards = require('./routes/Cards');
const Help = require('./routes/Helproute');
const Helpinput = require('./routes/Helpinput');
const Com1 = require('./routes/Community1');
const Com2 = require('./routes/community2');
const Com3 = require('./routes/Community3route');
const Com4 = require('./routes/community4routes');
const Com5 = require('./routes/community5routes');
const Com6 = require('./routes/community6routes');
const Com7 = require('./routes/community7routes');
const Com8 = require('./routes/community8routes');
const Com9 = require('./routes/community9routes');
const Com10 = require('./routes/community10routes');
const Com11 = require('./routes/community11toutes');
const support = require('./routes/supporoutes');
const tecnoroute1 = require('./routes/tecnoroute/firstroute');
const bodyParser = require('body-parser');
//s

const app = express();

//Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use('/image',router)
app.use('/shopimg',shopimgg)
app.use('/Card',Cards)
app.use('/Help',Help)
app.use('/Helpinput',Helpinput)
app.use('/Community1',Com1)
app.use('/Community2',Com2)
app.use('/Community3',Com3)
app.use('/Community4',Com4)
app.use('/Community5',Com5)
app.use('/Community6',Com6)
app.use('/Community7',Com7)
app.use('/Community9',Com8)
app.use('/Community10',Com9)
app.use('/Community11',Com10)
app.use('/Community12',Com11)
app.use('/tecno1',tecnoroute1)
app.use('/support',support)


mongoose.connect('mongodb+srv://Seid:sjEfusrjE5g19Xsv@cluster0.89klq35.mongodb.net/venque?retryWrites=true&w=majority')
.then(() => console.log('Connect Database...!'))
.then(() => {
    app.listen(3002)
})
.catch((err) => console.log(err))













