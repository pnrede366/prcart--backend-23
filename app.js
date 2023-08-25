const express = require('express')
require('dotenv').config()
require('./conn.js')
const app = express()
const PORT = process.env.PORT || 8070
const bodyParser = require('body-parser')
const Router = require('./routes/route.js')
const cors = require('cors')
// app.use((req, res, next) => {
//     console.log(req.headers,'file')
//     next()
// })
app.use("/uploads",express.static('uploads'))
app.use(cors())
app.use(bodyParser.json())
app.use(Router)
app.use(express.json())

app.listen(PORT, () => console.log('listening on' + PORT))