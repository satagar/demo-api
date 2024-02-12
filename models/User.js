const mongoose = require('mongoose');

const schema = new mongoose.Schema({ name: String, company: String });
const User = mongoose.model('User', schema);

module.exports = User;