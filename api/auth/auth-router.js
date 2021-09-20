const router = require('express').Router()
const bcrypt = require('bcrypt')
const Auth = require('./auth-model')
const tokenBuilder = require('./token-builder')

router.post('/register', (req, res, next) => {
    const { username, password, phone_number } = req.body
    const hash = bcrypt.hashSync(password, 8)
    Auth.addUser({ username, password: hash, phone_number })
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
})

module.exports = router