const { Cart } = require('../models')
const cart = require('../models/cart')

class cartController {
    static createCart(req, res, next){
        const user_id = req.user.id
        const produk_id = req.params.id
        Cart.create ({ user_id, produk_id })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    static updateCart(req, res, next){
        const user_id = req.user.id
        const produk_id = req.params.id
        const { id } = req.params
        Cart.update ({ user_id, produk_id }, {where: {id}})
        .then(data => {
            res.status(200).json('msg: berhasil diupdate')
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    static deleteCart(req, res, next){
        const user_id = req.user.id
        const produk_id = req.params.id
        const { id } = req.params
            Cart.destroy({ where: {id}})
        .then (data => {
            res.status(200).json('msg: berhasil didelete')
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
    static read(req,res, next){
        Cart.findAll({})
        .then  (cart => {
            res.status(200).json(cart)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}


module.exports= cartController