const mongoose = require('mongoose')

const slug = new mongoose.Schema({
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

module.exports = mongoose.model('slug', slug)
