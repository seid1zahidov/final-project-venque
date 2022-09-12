const Com7 = require('../models/community7model')


const getAllcom1 = async (req,res,next) => {
    let com7;
    try {
        com7 = await Com7.find();
    } catch (error) {
        console.log(error);
    }
    if(!com7) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com7})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com7;
    try {
        com7 = new Com7({
            image , 
        })
        await com7.save();
    } catch (error) {
        console.log(error);
    }
    if(!com7) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com7})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com7;
    try {
        com7 = await Com7.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com7) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com7})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com7;
    try {
        com7 = await Com7.findByIdAndUpdate(id, {
            image,
        })
        com7 = await com7.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com7) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com7})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com7;
  try {
    com7 = await Com7.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com7) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com7})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;