const Image = require('../models/Image')

// getAllBooks
const getAllimages = async (req,res,next) => {
    let images;
    try {
        images = await Image.find();
    } catch (error) {
        console.log(error);
    }
    if(!images) {
        return res.status(404).json({message: 'No books yet...!'})
    }
    else{
        return res.status(200).json({images})
    }
}

// addBook
const addImages = async (req,res,next) => {
    const {name,author,description,price,available,image} = req.body;
    let images;
    try {
        images = new Image({
            name,
            author,
            description,
            price,
            available,
            image
        })
        await images.save();
    } catch (error) {
        console.log(err);
    }
    if(!images) {
        return res.status(500).json({message: 'Unable to Add...!'})
    }
    else{
        return res.status(201).json({images})
    }
}


// getById
const getById = async (req,res,next) => {
    const id = req.params.id;
    let images;
    try {
        images = await Image.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!images) {
        return res.status(404).json({message: 'No books yet...!'})
    }
    else{
        return res.status(200).json({images})
    }
}
// updateBook
const updateimage = async (req,res,next) => {
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body;
    let images;
    try {
        images = await Image.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        })
        images = await book.save();
    } 
    catch (error) {
        console.log(err);
    }
    if(!images) {
        return res.status(404).json({message: 'Unable to Updated by this id...!'})
    }
    else{
      return res.status(200).json({images})
  }
}
// deleteBook
const deleteimages = async (req,res,next) => {
  const id = req.params.id;
  let images;
  try {
    images = await Image.findByIdAndDelete(id)
  } 
  catch (error) {
      console.log(err);
  }
  if(!images) {
      return res.status(404).json({message: 'Unable to Deleted by this id...!'})
  }
  else{
      return res.status(200).json({images})
  }
}

exports.getAllimages = getAllimages;
exports.addImages = addImages;
exports.getById = getById;
exports.updateimage = updateimage;
exports.deleteimages = deleteimages;