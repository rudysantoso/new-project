const router = require('express').Router()
const user = require('./user')
const product = require('./product')
const cart = require('./cart')
const productController = require('../controllers/ProductController')
const userController = require('../controllers/userController')
const registerController = require('../controllers/registerController')
const { route } = require('./user')
const loginController = require('../controllers/loginController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
// var request = require("request");


router.get('/', (req, res) => {
    console.log(req.query.nama)
    res.render('home')
})


router.use('/user', user)
router.use('/product', product)
router.use('/cart', cart)
router.use('/register', registerController.register)
router.use('/login', loginController.login)





router.get('/admin', productController.Admin)
router.get('/CreateProduct', productController.renderCreateProduct)
router.get('/Delete/:id', productController.deleteProduct)



module.exports = router