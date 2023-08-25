const express = require('express')
const { getUser, createUser, userLogin, deleteUser } = require('../controller/user')
const { addCategory, getCategory } = require('../controller/category')
const { getProducts, createProduct, deleteProduct, updateProduct, findProductById } = require('../controller/product')
const { upload } = require('../middleware/multer')
const Router = express.Router()

Router.get('/users',getUser)
Router.post("/users",createUser)
Router.delete("/users/:id",deleteUser)
Router.post("/login",userLogin)
Router.post("/category",addCategory)
Router.get("/category",getCategory)
Router.get("/product",getProducts)
Router.post("/product",upload.single('file'),createProduct)
Router.delete("/product/:id",deleteProduct)
Router.put("/product/:id",updateProduct)
Router.post("/product/:id",findProductById)

module.exports = Router