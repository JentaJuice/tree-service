const mongoose = require('mongoose')

const social = new mongoose.Schema({
  artistSlug: {
    required: true,
    type: String,
  },
  service: {
    required: true,
    type: String,
  },
  link: {
    required: true,
    type: String,
  },
})

module.exports = mongoose.model('social', social)
