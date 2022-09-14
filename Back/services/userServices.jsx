const { response, request } = require("express");
var exprees = require("express")
var router = exprees.Router();
var User = require("../models/user");
var jwt = require("jwt-simple")


router.post('/register' , (request , response) => {
    var userData = request.body;
    var user = new User(userData)

    user.save((error, result) => {
        if(error){
            console.log("Errorr saving the user")
        }
        response.sendStatus(201)
    })
})


router.post('/login' , async (request , response) => {
    var useData = request.body
    var user = await User.findOne({email:useData.email})
    if(!user){
        return response.status(401).send({message: 'Email or password Invalid'})
    }
    if(useData.password != user.password){
        return response.status(401).send({message: 'Email or password Invalid'})
    }

    var payload = {}
    var token = jwt.encode(payload, '12345')
    return response.status(200).send({token})
})

var user = {router}

module.exports = user
