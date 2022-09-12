const Com6 = require('../models/community6model')


const getAllcom1 = async (req,res,next) => {
    let com6;
    try {
        com6 = await Com6.find();
    } catch (error) {
        console.log(error);
    }
    if(!com6) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com6})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com6;
    try {
        com6 = new Com6({
            image , 
        })
        await com6.save();
    } catch (error) {
        console.log(error);
    }
    if(!com6) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com6})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com6;
    try {
        com6 = await Com6.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com6) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com6})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com6;
    try {
        com6 = await Com6.findByIdAndUpdate(id, {
            image,
        })
        com6 = await com6.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com6) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com6})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com6;
  try {
    com6 = await Com6.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com6) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com6})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;