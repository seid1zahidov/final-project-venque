const Card = require('../models/Card')


const getAllcart = async (req,res,next) => {
    let card;
    try {
        card = await Card.find();
    } catch (error) {
        console.log(error);
    }
    if(!card) {
        return res.status(404).json({message: 'No card yet...!'})
    }
    else{
        return res.status(200).json({card})
    }
}

// addBook
const addCart = async (req,res,next) => {
    const {name,price,image,rate} = req.body;
    let card;
    try {
        card = new Card({
            name,
            price,
            image , 
            rate
        })
        await card.save();
    } catch (error) {
        console.log(err);
    }
    if(!card) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({card})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let card;
    try {
        card = await Card.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!card) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({card})
    }
}
const updateCart = async (req,res,next) => {
    const id = req.params.id;
    const {name,price,image,rate} = req.body;
    let card;
    try {
        card = await Card.findByIdAndUpdate(id, {
            name,
            price,
            image,
            rate
        })
        card = await card.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!card) {
        return res.status(404).json({message: 'Cart no update!'})
    }
    else{
      return res.status(200).json({card})
  }
}
const deleteCart = async (req,res,next) => {
  const id = req.params.id;
  let card;
  try {
    card = await Card.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!card) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({card})
  }
}

const getSingleProduct=async(req,res,next)=>{
    const id = req.params.id;
    let card;
    try {
      card = await Card.findById(id)
      res.send(card)
    } 
    catch (error) {
        console.log(err);
    }
   
}

exports.getAllcart = getAllcart;
exports.addCart = addCart;
exports.getById = getById;
exports.updateCart = updateCart;
exports.deleteCart = deleteCart;
exports.getSingleProduct=getSingleProduct;