const db = require('../../data/db-config')

const getUsers = () => {
    return db('users')
}

const findUserById = (id) => {
    return db('users').where('user_id', id).first()
}

const addUser = (user) => {
    return db('users').insert(user)
}

const editUser = (id, data) => {
    return db('users').where('user_id', id).update(data)
}

const deleteUser = (id) => {
    return db('users').where('user_id', id).del()
}

module.exports = {
    getUsers,
    findUserById,
    addUser,
    editUser,
    deleteUser
}