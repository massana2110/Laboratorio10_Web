var express = require('express')
var router = express.Router()
const RegisterController = require('../controllers/registerController')

router.get('/', RegisterController.getALl)
router.get('/:id', RegisterController.getOneById)

router.post('/insert', RegisterController.insert)
router.put('/update', RegisterController.update)
router.delete('/delete', RegisterController.deleteById)

module.exports = router;