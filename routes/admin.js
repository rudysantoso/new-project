const router = require('express').Router()
const userController = require('../controllers/userAdminController')
const UserAdminController = require('../controllers/userAdminController')

router.post('/loginAdmin', UserAdminController.loginAdmin)

module.exports = router