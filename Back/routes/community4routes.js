const express = require('express')
const router = express.Router();
const Com1pcontroller = require('../controller/community4')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', Com1pcontroller.getAllcom1);
router.post('/', Com1pcontroller.addshopcom1);
router.get('/:id', Com1pcontroller.getById);
router.put('/:id', Com1pcontroller.updatecom1);
router.delete('/:id', Com1pcontroller.deletecom1);

module.exports=router;