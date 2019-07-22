const mongoose = require('mongoose')

const users = mongoose.Schema({
    name: { type: String, default: '' },
    mobile: { type: String, default: '' },
    password: { type: String, default: '' }
})

module.exports = mongoose.model('Users', users)