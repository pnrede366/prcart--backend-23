const Cart = require("../model/cart");
exports.getCart = async (req, res) => {
    try {
        const userId = req.user.result._id
        const result = await Cart.find({ userId: userId })
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.addCart = async (req, res) => {
    // console.log(req);
    try {
        const userId = req.user.result._id
        const { productId, quantity, price } = req.body
        const cart = new Cart({ productId, quantity, userId, price })
        const result = await cart.save()
        res.status(200).json({ success: true, result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
exports.removeCart = async (req, res) => {
    try {
        const userId = req.user.result._id
        const result = await Cart.findOneAndDelete({ productId: req.params.id, userId: userId });
        if (!result) {
            res.status(500).json({ message: 'Internal server error' });
        }
        else {
            res.status(200).json({ message: 'Deleted from cart', deletedProduct: result, success: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.updateCart = async (req, res) => {
    try {
        const result = await Cart.findOneAndUpdate({ _id: req.params.id }, req.body);
        console.log(req.params.id, req.body);
        res.status(200).json({ message: 'cart updated', updatedProduct: result, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};