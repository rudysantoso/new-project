const router = require('express').Router()
const cartController = require('../Controller/cartController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')


router.post('/:id',authentication, cartController.createCart)
router.put('/:id', authentication,authorization, cartController.updateCart)
router.delete('/:id', authentication,authorization, cartController.deleteCart)
router.get('/', authentication, cartController.read)


module.exports = router

