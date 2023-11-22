const mongoose = require('mongoose')

const link = new mongoose.Schema({
  songID: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: String(new Date().getTime()),
  },
})

module.exports = mongoose.model('link', link)
