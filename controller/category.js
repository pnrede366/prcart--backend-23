const Category = require('../model/Category')

exports.addCategory = async (req, res) => {
    console.log(req.body);
    try {
        const category = new Category(req.body)
        const result = category.save()

        res.status(200).json(result)
    } catch (error) {
        res.status(500).send({ error: true })
    }
}

exports.getCategory = async (req, res) => {
    console.log(req.body);
    try {
        const result = await Category.find({})
        res.status(200).json({ result, message: 'added', success: true })
    } catch (error) {
        res.status(500).send({ error: true })
    }
}