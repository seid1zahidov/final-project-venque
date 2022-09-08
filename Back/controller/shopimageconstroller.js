const Shopimg = require('../models/Shopimg')

const getAllshopimg = async (req,res,next) => {
    let shopimg;
    try {
        shopimg = await Shopimg.find();
    } catch (error) {
        console.log(error);
    }
    if(!shopimg) {
        return res.status(404).json({message: 'No books yet...!'})
    }
    else{
        return res.status(200).json({shopimg})
    }
}

const addShopimg = async (req,res,next) => {
    const {image} = req.body;
    let shopimg;
    try {
        shopimg = new Shopimg({
            image
        })
        await shopimg.save();
    } catch (error) {
        console.log(err);
    }
    if(!shopimg) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({shopimg})
    }
}


const getById = async (req,res,next) => {
    const id = req.params.id;
    let shopimg;
    try {
        shopimg = await Shopimg.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!shopimg) {
        return res.status(404).json({message: 'No cart  id!'})
    }
    else{
        return res.status(200).json({shopimg})
    }
}


const updateShopimg = async (req,res,next) => {
    const id = req.params.id;
    const {image} = req.body;
    let shopimg;
    try {
        shopimg = await Shopimg.findByIdAndUpdate(id, {
            image,
        })
        shopimg = await shopimg.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!shopimg) {
        return res.status(404).json({message: 'img no update!'})
    }
    else{
      return res.status(200).json({shopimg})
  }
}



const deleteshopimg = async (req,res,next) => {
  const id = req.params.id;
  let shopimg;
  try {
    shopimg = await Shopimg.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!shopimg) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({shopimg})
  }
}

exports.getAllshopimg = getAllshopimg;
exports.addShopimg = addShopimg;
exports.getById = getById;
exports.updateShopimg = updateShopimg;
exports.deleteshopimg = deleteshopimg;