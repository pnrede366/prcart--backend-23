const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost:27017/prcart').then(()=>console.log('connected to db')).catch(()=>console.log('failed'))