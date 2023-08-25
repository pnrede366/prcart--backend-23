const { default: mongoose } = require("mongoose");

const UserScheme = new mongoose.Schema({
    mobileNumber: Number,
    email: {type:String,unique:true},
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    address: {
        type: String,
    },
    name: String
})

const user = mongoose.model("user", UserScheme)
module.exports = user