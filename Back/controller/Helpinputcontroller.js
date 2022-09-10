const Input = require('../models/Helpinput')


const getAllinput = async (req,res,next) => {
    let input;
    try {
        input = await Input.find();
    } catch (error) {
        console.log(error);
    }
    if(!input) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({input})
    }
}

// addBook
const addinput = async (req,res,next) => {
    const {name,email,text} = req.body;
    let input;
    try {
        input = new Input({
            name,
            email,
            text
        })
        await input.save();
    } catch (error) {
        console.log(err);
    }
    if(!input) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({input})
    }
}






exports.getAllinput = getAllinput;
exports.addinput = addinput;