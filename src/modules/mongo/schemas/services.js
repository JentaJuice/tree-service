const mongoose = require('mongoose')

const songs = new mongoose.Schema({
  service: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('songs', songs)
