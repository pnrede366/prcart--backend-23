
const jwt = require('jsonwebtoken')
exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ error: true, message: 'token not provided' })
    }
    jwt.verify(token, "purushottam", (Err, decoded) => {
        if (Err) {
            return res.status(401).json({ error: true, message: 'Invalid token' })
        }
        req.user = decoded
        next()
    })
}