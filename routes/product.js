const router = require('express').Router()
const produkController = require('../Controller/ProdukController')


router.get('/', produkController.findAll)
// router.post('/', (req, res) => {
//   res.render('AddProduk')
// })
router.post('/', produkController.createProduk)
router.put('/:id', produkController.updateProduk)
router.delete('/:id', produkController.deleteProduk)
// router.get('/', produkController.detailProduk)

router.get('/:id', produkController.detailProduk)


module.exports = router