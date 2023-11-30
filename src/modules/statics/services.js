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
    case String(services[0]):
      rtnData = AmazonMusic(data.link)
      break

    case String(services[1]):
      rtnData = AppleMusic(data.link)
      break

    case String(services[2]):
      rtnData = BandCamp(data.link)
      break

    case String(services[3]):
      rtnData = SoundCloud(data.link)
      break

    case String(services[4]):
      rtnData = Spotify(data.link)
      break

    case String(services[5]):
      rtnData = Youtube(data.link)
      break

    case String(services[6]):
      rtnData = YouTubeMusic(data.link)
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
