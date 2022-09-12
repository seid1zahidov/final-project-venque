const Com2 = require('../models/commmunity2')


const getAllcom1 = async (req,res,next) => {
    let com2;
    try {
        com2 = await Com2.find();
    } catch (error) {
        console.log(error);
    }
    if(!com2) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com2})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com2;
    try {
        com2 = new Com2({
            image , 
        })
        await com2.save();
    } catch (error) {
        console.log(error);
    }
    if(!com2) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com2})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com2;
    try {
        com2 = await Com2.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com2) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com2})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com2;
    try {
        com2 = await Com2.findByIdAndUpdate(id, {
            image,
        })
        com2 = await com2.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com2) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com2})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com2;
  try {
    com2 = await Com2.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com2) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com2})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;