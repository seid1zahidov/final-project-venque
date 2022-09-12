const Com4 = require('../models/community4route4')


const getAllcom1 = async (req,res,next) => {
    let com4;
    try {
        com4 = await Com4.find();
    } catch (error) {
        console.log(error);
    }
    if(!com4) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com4})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com4;
    try {
        com4 = new Com4({
            image , 
        })
        await com4.save();
    } catch (error) {
        console.log(error);
    }
    if(!com4) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com4})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com4;
    try {
        com4 = await Com4.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com4) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com4})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com4;
    try {
        com4 = await Com4.findByIdAndUpdate(id, {
            image,
        })
        com4 = await com4.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com4) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com4})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com4;
  try {
    com4 = await Com4.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com4) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com4})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;