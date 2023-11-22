const mongoose = require('mongoose')

const songs = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  artist: {
    required: true,
    type: String,
  },
  year: {
    required: true,
    type: Number,
  },
  image: {
    required: true,
    type: String,
  },
  releasedDate: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: String(new Date().getTime()),
  },
})

module.exports = mongoose.model('songs', songs)
