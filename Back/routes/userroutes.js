const express = require('express')
const router = express.Router();
const usercontroller = require('../controller/usercontroller')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', usercontroller.getAllcuser);
router.post('/', usercontroller.addsuser);
router.get('/:id', usercontroller.getById);
router.put('/:id', usercontroller.updateuser);
router.delete('/:id', usercontroller.deleteuser);

module.exports=router;