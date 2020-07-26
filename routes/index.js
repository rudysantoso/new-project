const router = require('express').Router()
const userAdmin = require('./admin')
const user = require('./user')
const product = require('./product')
// const cart = require('./cart')
const UserAdminController = require('../controllers/userAdminController')
const productController = require('../controllers/ProductController')
const userController = require('../controllers/userController')
// const registerController = require('../controllers/registerController')
const { route } = require('./user')
// const loginController = require('../controllers/loginController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
// const admin = require('../models/admin')
// var request = require("request");


router.get('/', (req, res) => {
    console.log(req.query.nama)
    res.render('home')
})


router.use('/user', user)
router.use('/product', product)
// router.use('/cart', cart)
router.use('/admin', userAdmin)
// router.use('/register', registerController.register)
// router.use('/login', loginController.login)





router.get('/loginAdmin', UserAdminController.loginAdmin)
router.get('/admin', productController.Admin)
router.get('/CreateProduct', productController.renderCreateProduct)
router.get('/Delete/:id', productController.deleteProduct)



module.exports = router