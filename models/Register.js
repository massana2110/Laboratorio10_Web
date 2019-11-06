const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    carnet: String,
    schedule: String,
    isLate: Boolean,
    datetime: Date
})

module.exports = mongoose.model('Register', registerSchema)