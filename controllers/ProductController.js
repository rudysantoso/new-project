const { Product } = require('../models')

class productController {
    static findAll(req, res, next) {
        const { merk, ukuran, harga, jenis, image } = req.body
        Product.findAll({ merk, ukuran, harga, jenis, image })
            .then(data => {
                console.log(data)
                res.render('list', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static Admin(req, res, next) {
        const { merk, size, price, type, image } = req.body
        Product.findAll({ merk, size, price, type, image })
            .then(data => {
                console.log(data)
                res.render('admin', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static createProduct(req, res, next) {
        const { merk, size, price, type, image } = req.body
        Product.create({ merk, size, price, type, image })
            .then(data => {
                res.redirect('/admin')
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static renderCreateProduct(req, res, next) {
        res.render('CreateProduct')
    }
    static deleteProduct(req, res, next) {
        const { id } = req.params
        Product.destroy({ where: { id } })
            .then(data => {
                res.redirect('/admin')
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static searchMerk(req, res, next) {
        const { keyword } = req.query;
        Product.findAll({
            where: { merk: { [Op.like]: '%' + keyword + '%' } }
        })
            .then(data => {
                res.render('home', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}


module.exports = productController