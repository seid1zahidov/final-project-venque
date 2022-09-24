const express = require('express')
const router = express.Router();
const Tecnocontroller = require('../../controller/tecnology/tecnofirst')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', Tecnocontroller.getAllcart);
router.post('/', Tecnocontroller.addCart);
router.get('/:id', Tecnocontroller.getById);
router.put('/:id', Tecnocontroller.updateCart);
router.delete('/:id', Tecnocontroller.deleteCart);

module.exports=router;