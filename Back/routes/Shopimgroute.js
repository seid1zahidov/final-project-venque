const express = require('express')
const router = express.Router();
const shopimageconttroler = require('../controller/shopimageconstroller')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', shopimageconttroler.getAllshopimg);
router.post('/', shopimageconttroler.addShopimg);
router.get('/:id', shopimageconttroler.getById);
router.put('/:id', shopimageconttroler.updateShopimg);
router.delete('/:id', shopimageconttroler.deleteshopimg);

module.exports=router;