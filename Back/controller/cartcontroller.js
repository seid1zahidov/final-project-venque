const Cart = require('../models/Cart')


const getAllcart = async (req,res,next) => {
    let cart;
    try {
        cart = await Cart.find();
    } catch (error) {
        console.log(error);
    }
    if(!cart) {
        return res.status(404).json({message: 'No books yet...!'})
    }
    else{
        return res.status(200).json({cart})
    }
}

// addBook
const addCart = async (req,res,next) => {
    const {name,price,image} = req.body;
    let cart;
    try {
        cart = new Cart({
            name,
            price,
            image
        })
        await cart.save();
    } catch (error) {
        console.log(err);
    }
    if(!cart) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({cart})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let cart;
    try {
        cart = await Cart.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!cart) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({cart})
    }
}
const updateCart = async (req,res,next) => {
    const id = req.params.id;
    const {name,price,image} = req.body;
    let cart;
    try {
        cart = await Cart.findByIdAndUpdate(id, {
            name,
            price,
            image,
        })
        cart = await cart.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!cart) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({cart})
  }
}
const deleteCart = async (req,res,next) => {
  const id = req.params.id;
  let cart;
  try {
    cart = await Cart.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!cart) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({cart})
  }
}

exports.getAllcart = getAllcart;
exports.addCart = addCart;
exports.getById = getById;
exports.updateCart = updateCart;
exports.deleteCart = deleteCart;