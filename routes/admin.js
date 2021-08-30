const { Router } = require('express')
const adminController = require('../controllers/admin')
const router = Router()

router.get('/', adminController.index)

module.exports = router