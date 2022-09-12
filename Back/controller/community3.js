const Com3 = require('../models/community3')


const getAllcom1 = async (req,res,next) => {
    let com3;
    try {
        com3 = await Com3.find();
    } catch (error) {
        console.log(error);
    }
    if(!com3) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com3})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com3;
    try {
        com3 = new Com3({
            image , 
        })
        await com3.save();
    } catch (error) {
        console.log(error);
    }
    if(!com3) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com3})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com3;
    try {
        com3 = await Com3.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com3) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com3})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com3;
    try {
        com3 = await Com3.findByIdAndUpdate(id, {
            image,
        })
        com3 = await com3.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com3) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com3})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com3;
  try {
    com3 = await Com3.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com3) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com3})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;