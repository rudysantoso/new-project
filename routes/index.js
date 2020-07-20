const router = require('express').Router()
const user = require('./user')
const produk = require('./produk')
const cart = require('./cart')
const produkController = require('../Controller/ProdukController')
const userController = require('../Controller/userController')
const registerController = require('../Controller/registerController')
const { route } = require('./user')
const loginController = require('../Controller/loginController')
// var request = require("request");


router.get('/', (req, res) => {
    console.log(req.query.nama)
    res.render('home')
})


// List
router.get('/list', produkController.findAll)


// Detail
router.get('/detail_produk/:id', produkController.detailProduk)
router.get('/list_merk/:merk', produkController.findMerk)

// Admin
router.get('/admin', produkController.Produk)
router.get('/addproduk', produkController.createProduk)

router.get('/update_produk/:id', produkController.updateProduk)
router.get('/:id', produkController.deleteProduk)






router.get('/sign up', userController.register)


router.use('/user', user)
router.use('/produk', produk)
router.use('/cart', cart)
router.use('/register', registerController.register)
router.use('/login', loginController.login)


module.exports = router