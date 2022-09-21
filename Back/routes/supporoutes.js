const express = require('express')
const router = express.Router();
const supportcontroller = require('../controller/support')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', supportcontroller.getAllcart);
router.post('/', supportcontroller.addCart);
router.get('/:id', supportcontroller.getById);
router.put('/:id', supportcontroller.updateCart);
router.delete('/:id', supportcontroller.deleteCart);

module.exports=router;