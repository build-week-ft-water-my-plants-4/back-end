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

const checkBody = (req, res, next) => {
    const { username, password } = req.body
    const valid = Boolean(username && password)
    if (valid) {
        next()
    } else {
        next({
            status: 422,
            message: 'username and password required'
        })
    }
}

const checkBodyPhoneNumber = (req, res, next) => {
    const { username, password, phone_number } = req.body
    const valid = Boolean(username && password && phone_number)
    if (valid) {
        next()
    } else {
        next({
            status: 422,
            message: 'username, password, and phone number required'
        })
    }
}

const checkUsernameExists = async (req, res, next) => {
    try {
        const user = await Auth.findByUn(req.body.username)
        if (!user) {
            next({ status: 401,
            message: 'invalid credentials' })
        } else {
            req.user = user
            next()
        }
    } catch (err) {
        next(err)
    }
}

const restricted = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return next({ status: 401, message: 'token required' })
    }

    verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return next({
                status: 401,
                message: 'token invalid'
            })
        }
        req.decodedToken = decodedToken
        next()
    })
}

module.exports = {
    validateUniqueUser,
    checkBody,
    checkBodyPhoneNumber,
    checkUsernameExists,
    restricted
}