const { default: mongoose } = require("mongoose");

const CartSchema = mongoose.Schema({
    productId: { type: String, required: true },
    quantity: Number,
    price: String,
    userId: { type: String }
})

const Cart = new mongoose.model('cart', CartSchema)

module.exports = Cart