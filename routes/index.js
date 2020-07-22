const router = require('express').Router()
const user = require('./user')
const product = require('./product')
const cart = require('./cart')
const produkController = require('../controllers/ProdukController')
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


// List
// router.get('/list', produkController.findAll)


// // Detail
// router.get('/detail_produk/:id', produkController.detailProduk)
// router.get('/list_merk/:merk', produkController.findMerk)

// // Admin
// router.get('/admin', produkController.Produk)
// router.get('/addproduk', produkController.createProduk)

// router.get('/update_produk/:id', produkController.updateProduk)
// router.get('/:id', produkController.deleteProduk)






// router.get('/sign up', userController.register)


router.use('/user', user)
router.use('/produk', product)
router.use('/cart', cart)
router.use('/register', registerController.register)
router.use('/login', loginController.login)


module.exports = router