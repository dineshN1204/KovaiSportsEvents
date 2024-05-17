const mongoose = require('mongoose')
const usersScheme = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const usersModel = mongoose.model('users',usersScheme)

module.exports = usersModel
