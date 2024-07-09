const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String
});

module.exports = mongoose.model('Contact', contactSchema);
