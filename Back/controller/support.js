const Support = require('../models/supportmodels')


const getAllcart = async (req,res,next) => {
    let support;
    try {
        support = await Support.find();
    } catch (error) {
        console.log(error);
    }
    if(!support) {
        return res.status(404).json({message: 'No support yet...!'})
    }
    else{
        return res.status(200).json({support})
    }
}

// addBook
const addCart = async (req,res,next) => {
    const {idi,author,text} = req.body;
    let support;
    try {
        support = new Support({
            idi,
            author,
            text 
        })
        await support.save();
    } catch (error) {
        console.log(err);
    }
    if(!support) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({support})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let support;
    try {
        support = await Support.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!support) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({support})
    }
}
const updateCart = async (req,res,next) => {
    const id = req.params.id;
    const {idi,author,text} = req.body;
    let support;
    try {
        support = await Support.findByIdAndUpdate(id, {
            idi,
            author,
            text
        })
        support = await support.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!support) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({support})
  }
}
const deleteCart = async (req,res,next) => {
  const id = req.params.id;
  let support;
  try {
    support = await Support.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!support) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({support})
  }
}

exports.getAllcart = getAllcart;
exports.addCart = addCart;
exports.getById = getById;
exports.updateCart = updateCart;
exports.deleteCart = deleteCart;