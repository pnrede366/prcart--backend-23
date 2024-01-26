const Product = require('../model/product')

exports.getProducts = async (req, res) => {
    try {
        const result = await Product.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
exports.createProduct = async (req, res) => {
    try {
        const { title, price, description, features, category } = req.body
        const file = req?.file?.path
        const product = new Product({ title, price, description, features, category, file })
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
    try {
        const { title, price, description, features, category } = req.body
        const file = req?.file?.path
        const result = await Product.findByIdAndUpdate({ _id: req.params.id }, { title, price, description, features, category, file });
        res.status(200).json({ message: 'Product updated', updatedProduct: result, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.findProductById = async (req, res) => {
    const data = req.body
    try {
        if (data.length) {
            const result = data?.map(async (item) => {
                console.log(item.quantity);
                const product = await Product.findById(item.productId);
                return { product, quantity: item.quantity }
            }
            )
            const productsWithDetails = await Promise.all(result);
            console.log(productsWithDetails);
            res.status(200).json({ product: productsWithDetails, success: true });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.findSingleProductById = async (req, res) => {
    const productId = req.params.id
    console.log(productId);
    try {
        const product = await Product.findById(productId);
        console.log(productId);
        res.status(200).json({ product: product, success: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
