const { default: mongoose } = require("mongoose");

const OrderSchema = mongoose.Schema({
    productId: { type: String, required: true },
    quantity: Number,
    userId: { type: String, required: true }
})

const Order = new mongoose.model('order', OrderSchema)

module.exports = Order