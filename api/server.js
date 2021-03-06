const express = require('express')
const cors = require('cors')

const server = express()

const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')
const plantsRouter = require('./plants/plants-router')
// const { restrict } = require('./auth/auth-middleware') // will likely be used for plants route

server.use(express.json())
server.use(cors())

server.use('/api/users', usersRouter)
server.use('/auth', authRouter)
server.use('/api/plants', plantsRouter)

server.get('/api', (req, res) => {
    res.json(`Welcome to the GARDEN OF EDEN server!`)
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server