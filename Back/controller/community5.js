const Com5 = require('../models/community5route')


const getAllcom1 = async (req,res,next) => {
    let com5;
    try {
        com5 = await Com5.find();
    } catch (error) {
        console.log(error);
    }
    if(!com5) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({com5})
    }
}

// addBook
const addshopcom1 = async (req,res,next) => {
    const {image} = req.body;
    let com5;
    try {
        com5 = new Com5({
            image , 
        })
        await com5.save();
    } catch (error) {
        console.log(error);
    }
    if(!com5) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({com5})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let com5;
    try {
        com5 = await Com5.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!com5) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({com5})
    }
}
const updatecom1 = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let com5;
    try {
        com5 = await Com5.findByIdAndUpdate(id, {
            image,
        })
        com5 = await com5.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!com5) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({com5})
  }
}
const deletecom1 = async (req,res,next) => {
  const id = req.params.id;
  let com5;
  try {
    com5 = await Com5.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!com5) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({com5})
  }
}

exports.getAllcom1 = getAllcom1;
exports.addshopcom1 = addshopcom1;
exports.getById = getById;
exports.updatecom1 = updatecom1;
exports.deletecom1 = deletecom1;