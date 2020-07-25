const router = require('express').Router()
const productController = require('../controllers/ProductController')


router.get('/', productController.findAll)
// router.post('/', (req, res) => {
//   res.render('AddProduk')
// })
router.post('/', productController.createProduct)
router.delete('/:id', productController.deleteProduct)
// router.get('/', produkController.detailProduk)

// router.get('/:id', produkController.detailProduk)


module.exports = router