const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: Number,
    name: String,
    nic: String,
    email: String,
    dob: String,
    gender: String,
    city: String,
    Role: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;