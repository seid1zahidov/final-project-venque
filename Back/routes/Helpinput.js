const express = require('express')
const router = express.Router();
const Inputcontroller = require('../controller/Helpinputcontroller')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', Inputcontroller.getAllinput);
router.post('/', Inputcontroller.addinput);

module.exports=router;