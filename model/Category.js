const { default: mongoose } = require("mongoose");

const CategorySchema = new mongoose.Schema({
    type: { type: String, unique: true },
})

const Category = new mongoose.model('category', CategorySchema)

module.exports = Category