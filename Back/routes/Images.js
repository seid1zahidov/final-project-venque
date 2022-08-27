const express = require('express')
const router = express.Router();
const imagecontroller = require('../controller/imagecontroller')


//router vasitesile route emeliyyatlarini ede bilerik (get,post,delete,update)


router.get('/', imagecontroller.getAllimages);
router.post('/', imagecontroller.addImages);
router.get('/:id', imagecontroller.getById);
router.put('/:id', imagecontroller.updateimage);
router.delete('/:id', imagecontroller.deleteimages);

module.exports=router;