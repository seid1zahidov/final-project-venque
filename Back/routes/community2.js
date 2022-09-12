const express = require('express')
const router = express.Router();
const Com2pcontroller = require('../controller/community2')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', Com2pcontroller.getAllcom1);
router.post('/', Com2pcontroller.addshopcom1);
router.get('/:id', Com2pcontroller.getById);
router.put('/:id', Com2pcontroller.updatecom1);
router.delete('/:id', Com2pcontroller.deletecom1);

module.exports=router;