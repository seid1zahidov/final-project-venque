const data = require('../data')
const User = require('../models/userModel')
const express = require('express')


const seedRoutes = express.Router();

seedRoutes.get('/login' , async(req , res) => {
    await User.remove({});
    const createUser  = await User.insertMany(data.users)
    res.send({createUser});
})
