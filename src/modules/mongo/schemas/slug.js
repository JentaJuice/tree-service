const mongoose = require('mongoose')

const slug = new mongoose.Schema({
  artist: {
    required: true,
    type: String,
  },
  slug: {
    required: true,
    type: String,
  },
  desp: {
    require: true,
    type: String,
  },
  img: {
    require: true,
    type: String,
  },
  date: {
    type: String,
    default: String(new Date().getTime()),
  },
})

module.exports = mongoose.model('slug', slug)
