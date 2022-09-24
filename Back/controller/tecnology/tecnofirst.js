const First = require('../../models/tecnologymodel/firstmodel')


const getAllcart = async (req,res,next) => {
    let first;
    try {
        first = await First.find();
    } catch (error) {
        console.log(error);
    }
    if(!first) {
        return res.status(404).json({message: 'No first yet...!'})
    }
    else{
        return res.status(200).json({first})
    }
}

// addBook
const addCart = async (req,res,next) => {
    const {image} = req.body;
    let first;
    try {
        first = new First({
            image 
        })
        await first.save();
    } catch (error) {
        console.log(err);
    }
    if(!first) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({first})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let first;
    try {
        first = await First.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!first) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({first})
    }
}
const updateCart = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let first;
    try {
        first = await First.findByIdAndUpdate(id, {
            image
        })
        first = await first.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!first) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({first})
  }
}
const deleteCart = async (req,res,next) => {
  const id = req.params.id;
  let first;
  try {
    first = await First.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!first) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({first})
  }
}

exports.getAllcart = getAllcart;
exports.addCart = addCart;
exports.getById = getById;
exports.updateCart = updateCart;
exports.deleteCart = deleteCart;