const router = require('express').Router()
const Users = require('./users-model')

router.get('/', (req, res, next) => {
    Users.getUsers()
        .then(users => {
            res.json(users)
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params
    Users.findUserById(id)
        .then(user => {
            res.json(user)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Users.addUser(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    const { id } = req.params
    Users.editUser(id, req.body)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(next)
})

module.exports = router