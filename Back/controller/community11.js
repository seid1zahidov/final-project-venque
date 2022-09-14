const Com11 = require('../models/community11model')


const getAllcom1 = async (req,res,next) => {
    let com11;
    try {
        com11 = await Com11.find();
    } catch (error) {
        console.log(error);
    }
    if(!com11) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com11})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image , title , text} = req.body;
    let com11;
    try {
        com11 = new Com11({
            image , 
            title,
            text
        })
        await com11.save();
    } catch (error) {
        console.log(error);
    }
    if(!com11) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com11})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com11;
    try {
        com11 = await Com11.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com11) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com11})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image , title ,text} = req.body;
    let com11;
    try {
        com11 = await Com11.findByIdAndUpdate(id, {
            image,
            title,
            text
        })
        com11 = await com11.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com11) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com11})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com11;
  try {
    com11 = await Com11.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com11) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com11})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;