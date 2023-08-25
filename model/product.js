const { default: mongoose } = require("mongoose");

const ProductSchema = mongoose.Schema({
    title: { type: String, },
    price: { type: Number },
    description: { type: String, },
    features: { type: String, }
})

const Product = new mongoose.model('product', ProductSchema)

module.exports = Product