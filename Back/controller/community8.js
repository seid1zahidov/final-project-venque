const Com8 = require('../models/community8models')


const getAllcom1 = async (req,res,next) => {
    let com8;
    try {
        com8 = await Com8.find();
    } catch (error) {
        console.log(error);
    }
    if(!com8) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com8})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com8;
    try {
        com8 = new Com8({
            image , 
        })
        await com8.save();
    } catch (error) {
        console.log(error);
    }
    if(!com8) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com8})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com8;
    try {
        com8 = await Com8.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com8) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com8})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com8;
    try {
        com8 = await Com8.findByIdAndUpdate(id, {
            image,
        })
        com8 = await com8.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com8) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com8})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com8;
  try {
    com8 = await Com8.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com8) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com8})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;