const express = require('express')
const router = express.Router();
const Helpcontroller = require('../controller/helpimage')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', Helpcontroller.getAllcimg);
router.post('/', Helpcontroller.addshopimg);
router.get('/:id', Helpcontroller.getById);
router.put('/:id', Helpcontroller.updateShopimg);
router.delete('/:id', Helpcontroller.deleteshopimg);

module.exports=router;