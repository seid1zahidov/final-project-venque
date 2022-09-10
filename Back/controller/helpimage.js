const Help = require('../models/Helpimage')


const getAllcimg = async (req,res,next) => {
    let help;
    try {
        help = await Help.find();
    } catch (error) {
        console.log(error);
    }
    if(!help) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({help})
    }
}

// addBook
const addshopimg = async (req,res,next) => {
    const {image} = req.body;
    let help;
    try {
        help = new Help({
            image , 
        })
        await help.save();
    } catch (error) {
        console.log(err);
    }
    if(!help) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({help})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let help;
    try {
        help = await Help.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!help) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({help})
    }
}
const updateShopimg = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let help;
    try {
        help = await Help.findByIdAndUpdate(id, {
            image,
        })
        help = await help.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!help) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({help})
  }
}
const deleteshopimg = async (req,res,next) => {
  const id = req.params.id;
  let help;
  try {
    help = await Help.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!help) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({help})
  }
}

exports.getAllcimg = getAllcimg;
exports.addshopimg = addshopimg;
exports.getById = getById;
exports.updateShopimg = updateShopimg;
exports.deleteshopimg = deleteshopimg;