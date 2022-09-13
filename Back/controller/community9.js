const Com9 = require('../models/community9model')


const getAllcom1 = async (req,res,next) => {
    let com9;
    try {
        com9 = await Com9.find();
    } catch (error) {
        console.log(error);
    }
    if(!com9) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com9})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com9;
    try {
        com9 = new Com9({
            image , 
        })
        await com9.save();
    } catch (error) {
        console.log(error);
    }
    if(!com9) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com9})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com9;
    try {
        com9 = await Com9.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com9) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com9})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com9;
    try {
        com9 = await Com9.findByIdAndUpdate(id, {
            image,
        })
        com9 = await com9.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com9) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com9})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com9;
  try {
    com9 = await Com9.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com9) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com9})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;