const Auth = require('./auth-model')
const { verify } = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config/secrets')

const validateUniqueUser = async (req, res, next) => {
    try {
        const { username } = req.body
        const existingUser = await Auth.findByUn(username)
        if (existingUser) {
            next({ message: 'username taken' })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    validateUniqueUser
}