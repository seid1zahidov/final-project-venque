const Com10 = require('../models/community9model')


const getAllcom1 = async (req,res,next) => {
    let com10;
    try {
        com10 = await Com10.find();
    } catch (error) {
        console.log(error);
    }
    if(!com10) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com10})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com10;
    try {
        com10 = new Com10({
            image , 
        })
        await com10.save();
    } catch (error) {
        console.log(error);
    }
    if(!com10) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com10})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com10;
    try {
        com10 = await Com10.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com10) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com10})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com10;
    try {
        com10 = await Com10.findByIdAndUpdate(id, {
            image,
        })
        com10 = await com10.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com10) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com10})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com10;
  try {
    com10 = await Com10.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com10) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com10})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;