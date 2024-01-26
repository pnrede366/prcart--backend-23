const Order = require('../model/orders')

exports.getOrders = async (req, res) => {
    try {
        const result = await Order.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.getOrdersByUser = async (req, res) => {
    try {
        const result = await Order.find({ userId: req.user.result._id })
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
exports.createOrder = async (req, res) => {
    const userId = req.user.result._id
    try {
        const { productId, quantity } = req.body
        const order = new Order({ productId, quantity, userId })
        const result = await order.save()
        res.status(200).json({ success: true, result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}