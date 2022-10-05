const express = require('express')
const router = express.Router();
const cartcontroller = require('../controller/cartcontroller1')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', cartcontroller.getAllcart);
router.post('/', cartcontroller.addCart);
router.get('/:id', cartcontroller.getById);
router.put('/:id', cartcontroller.updateCart);
router.delete('/:id', cartcontroller.deleteCart);
router.get('/product/:id', cartcontroller.getSingleProduct);


module.exports=router;