const Product = require('../model/product')

exports.getProducts = async (req, res) => {
    try {
        const result = await Product.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        const result = await product.save()
        res.status(200).json({ success: true, result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const result = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted', deletedProduct: result, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.updateProduct = async (req, res) => {
    console.log(req.body, req.params.id);
    try {
        const result = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.status(200).json({ message: 'Product updated', updatedProduct: result, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.findProductById = async (req, res) => {
    try {
        const result = await Product.findById({ _id: req.params.id });
        res.status(200).json({ product: result, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
