const Category = require("../model/Category");
const Product = require("../model/product");

exports.search = async (req, res) => {
    console.log(req.query.text);
    try {
        const result = await Product.aggregate([
            {
                '$match': {
                    'title': {
                        '$regex': req.query.text,
                        '$options': 'i' 
                    }
                }
            }
        ])
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}
exports.searchCategory = async (req, res) => {
    try {
        const result = await Product.aggregate([
            {
                '$match': {
                    'category': {
                        '$regex': req.query.text,
                        '$options': 'i' // 'i' means case-insensitive
                    }
                }
            }
        ]);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}




