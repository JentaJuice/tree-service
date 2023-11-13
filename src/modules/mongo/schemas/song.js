const mongoose = require('mongoose')

const link = new mongoose.Schema({
  service: {
    required: true,
    type: String,
  },
  link: {
    required: true,
    type: String,
  },
})

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
    require: true,
    type: String,
  },
  links: [link],
  releasedDate: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    default: String(new Date().getTime()),
  },
})

module.exports = mongoose.model('songs', songs)
