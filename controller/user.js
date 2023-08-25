const User = require('../model/user')
const jwt = require('jsonwebtoken')

exports.getUser = async (req, res) => {
    try {
        const result = await User.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        const result = await user.save()
        res.status(200).json(result)
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Username or email already exists' });
        } else {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted', deletedUser: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.userLogin = async (req, res) => {
    try {
        const result = await User.findOne({ username: req.body.username, password: req.body.password })
        if (result) {
            jwt.sign({ result }, "purushottam", { expiresIn: "3000s" }, (error, token) => res.status(200).json({ result, user: true, token }))
        }
        else {
            res.status(404).json({ result, user: false, message: 'user not found' })
        }
    } catch (error) {
        res.status(500).json({ result, user: true })
        console.log(error);
    }
}
