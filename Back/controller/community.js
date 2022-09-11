const Com1 = require('../models/communityroute')


const getAllcom1 = async (req,res,next) => {
    let com1;
    try {
        com1 = await Com1.find();
    } catch (error) {
        console.log(error);
    }
    if(!com1) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com1})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com1;
    try {
        com1 = new Com1({
            image , 
        })
        await com1.save();
    } catch (error) {
        console.log(err);
    }
    if(!com1) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com1})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com1;
    try {
        com1 = await Com1.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com1) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com1})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com1;
    try {
        com1 = await Com1.findByIdAndUpdate(id, {
            image,
        })
        com1 = await com1.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com1) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com1})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com1;
  try {
    com1 = await Com1.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com1) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com1})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;