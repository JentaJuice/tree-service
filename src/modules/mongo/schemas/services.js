const mongoose = require('mongoose')

const services = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  svclass: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('services', services)
