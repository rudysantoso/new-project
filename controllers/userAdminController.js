const { Admin } = require('../models')
const { hashPassword, compare } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')

class UserAdminController {
    static loginAdmin(req, res, next) {
        const { UserAdmin, password } = req.body
        // console.log(req.body)
        Admin.findOne({ where: { UserAdmin } })
            .then(data => {

                const user = data.dataValues
                console.log(user)
                if (user && compare(password, user.password)) {
                    let payload = { id: user.id, UserAdmin: user.UserAdmin }
                    let token = generateToken(payload)
                    res.cookie('token', token)
                    res.redirect('/admin')
                } else {
                    res.status(400).json('msg: data tidak ada')
                }
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static renderLoginAdmin(req, res, next) {
        res.render('')
    }
}

module.exports = UserAdminController