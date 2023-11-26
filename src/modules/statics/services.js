const AppleMusic = require('../../pages/frontend/songs/services/AppleMusic')
const AmazonMusic = require('../../pages/frontend/songs/services/AmazonMusic')
const BandCamp = require('../../pages/frontend/songs/services/Bandcamp')
const SoundCloud = require('../../pages/frontend/songs/services/Soundcloud')
const Spotify = require('../../pages/frontend/songs/services/Spotify')
const Youtube = require('../../pages/frontend/songs/services/Youtube')
const YouTubeMusic = require('../../pages/frontend/songs/services/YoutubeMusic')

const services = [
  'Amazon Music',
  'Apple Music',
  'Bandcamp',
  'Soundcloud',
  'Spotify',
  'Youtube',
  'Youtube Music',
]

function ServiceRender(data) {
  let rtnData = ''

  switch (data.service) {
    case services[0]:
      AmazonMusic(data.link)
      break

    case services[1]:
      AppleMusic(data.link)
      break

    case services[2]:
      BandCamp(data.link)
      break

    case services[3]:
      SoundCloud(data.link)
      break

    case services[4]:
      Spotify(data.link)
      break

    case services[5]:
      Youtube(data.link)
      break

    case services[6]:
      YouTubeMusic(data.link)
      break

    default:
      break
  }

  return rtnData
}

module.exports = {
  services,
  ServiceRender,
}
