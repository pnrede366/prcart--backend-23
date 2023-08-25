const express = require('express')
const { getUser, createUser, userLogin, deleteUser } = require('../controller/user')
const { addCategory } = require('../controller/category')
const Router = express.Router()

Router.get('/users',getUser)
Router.post("/users",createUser)
Router.delete("/users/:id",deleteUser)
Router.post("/login",userLogin)
Router.post("/category",addCategory)

module.exports = Router