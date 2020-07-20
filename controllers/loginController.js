// const { login } = require('../models')

class loginController {
    static login(req, res) {
        res.render('login')
    }
}

module.exports = loginController