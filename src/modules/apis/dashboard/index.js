const songSchema = require('../../mongo/schemas/song')
const slugSchema = require('../../mongo/schemas/slug')
const serviceSchema = require('../../mongo/schemas/services')

async function dashFilter(artist) {
  let songList

  if (artist != undefined || artist != null) {
    songList = await songSchema.find({ artist: artist }).exec()
  } else {
    songList = await songSchema.find().exec()
  }

  return songList
}

async function dashListing() {
  const artist = await slugSchema.find().exec()
  const service = await serviceSchema.find().exec()

  return {
    artist: artist,
    service: service,
  }
}

module.exports = {
  dashFilter,
  dashListing,
}
