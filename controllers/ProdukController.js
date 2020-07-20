const { Produk } = require('../models')

class produkController {
    static findAll(req, res, next) {
        const { merk, ukuran, harga, jenis, image } = req.body
        Produk.findAll({ merk, ukuran, harga, jenis, image })
            .then(data => {
                console.log(data)
                res.render('list', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static createProduk(req, res, next) {
        const { merk, ukuran, harga, jenis, image } = req.body
        Produk.create({ merk, ukuran, harga, jenis, image })
            .then(data => {
                // console.log(data)
                res.render('addproduk')

            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static updateProduk(req, res, next) {
        const { merk, ukuran, harga, jenis, image } = req.body
        const { id } = req.params
        Produk.update({ merk, ukuran, harga, jenis, image }, { where: { id } })
            .then(data => {
                res.render('UpdateProduk', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static deleteProduk(req, res, next) {
        const { id } = req.params
        Produk.destroy({ where: { id } })
            .then(data => {
                res.redirect('/admin')
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static detailProduk(req, res, next) {
        const { id } = req.params
        const { merk, ukuran, harga, jenis, image } = req.body
        Produk.findAll({ where: { id } }, { merk, ukuran, harga, jenis, image })

            .then(data => {
                //  console.log(data)
                res.render('detail', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static findMerk(req, res, next) {
        const { merk } = req.params
        const { ukuran, harga, jenis, image } = req.body
        console.log(merk)
        Produk.findAll({ where: { merk } }, { merk, ukuran, harga, jenis, image })
            .then(data => {
                res.render('list', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static Produk(req, res, next) {
        const { merk, ukuran, harga, jenis, image } = req.body
        Produk.findAll({ merk, ukuran, harga, jenis, image })
            .then(data => {
                console.log(data)
                res.render('admin', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}

module.exports = produkController