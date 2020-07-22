const { User } = require('../models')
const { hashPassword, compare } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')


class userController {
    static register(req, res, next) {
        const { name, password, email, lokasi } = req.body
        const hash = hashPassword(password)
        // console.log(req.body)
        User.create({ name, password: hash, email, lokasi })
            .then(result => {
                res.status(200).json('berhasil register data')
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static login(req, res, next) {
        const { name, password } = req.body
        // console.log(req.body)
        User.findOne({ where: { name } })
            .then(data => {

                const user = data.dataValues
                console.log(user)
                if (user && compare(password, user.password)) {
                    let payload = { id: user.id, name: user.name }
                    let token = generateToken(payload)
                    res.cookie('token', token)
                    res.redirect('/list')
                } else {
                    res.status(400).json('msg: data tidak ada')
                }
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}

module.exports = userController