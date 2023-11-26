const AmazonMusic = require('../../pages/frontend/artists/socials/AmazonMusic')
const AppleMusic = require('../../pages/frontend/artists/socials/AppleMusic')
const BandCamp = require('../../pages/frontend/artists/socials/Bandcamp')
const Blog = require('../../pages/frontend/artists/socials/Blog')
const Discord = require('../../pages/frontend/artists/socials/Discord')
const Email = require('../../pages/frontend/artists/socials/EMail')
const Facebook = require('../../pages/frontend/artists/socials/Facebook')
const Github = require('../../pages/frontend/artists/socials/Github')
const HomePage = require('../../pages/frontend/artists/socials/HomePage')
const Instagram = require('../../pages/frontend/artists/socials/Instagram')
const NGL = require('../../pages/frontend/artists/socials/NGL')
const Soundcloud = require('../../pages/frontend/artists/socials/Soundcloud')
const Spotify = require('../../pages/frontend/artists/socials/Spotify')
const Thread = require('../../pages/frontend/artists/socials/Thread')
const Tiktok = require('../../pages/frontend/artists/socials/Tiktok')
const Twitch = require('../../pages/frontend/artists/socials/Twitch')
const X = require('../../pages/frontend/artists/socials/X')
const Youtube = require('../../pages/frontend/artists/socials/Youtube')
const YoutubeMusic = require('../../pages/frontend/artists/socials/YoutubeMusic')

const social = [
  'Amazon Music',
  'Apple Music',
  'Bandcamp',
  'Blog',
  'Discord',
  'E-Mail',
  'Facebook',
  'Github',
  'HomePage',
  'Instagram',
  'NGL',
  'Soundcloud',
  'Spotify',
  'Thread',
  'Tiktok',
  'Twitch',
  'X (formerly Twitter)',
  'Youtube',
  'Youtube Music',
]

function SocialRender(data) {
  let rtnBox = ''

  switch (data.service) {
    case social[0]:
      rtnBox = AmazonMusic(data.link)
      break

    case social[1]:
      rtnBox = AppleMusic(data.link)
      break

    case social[2]:
      rtnBox = BandCamp(data.link)
      break

    case social[3]:
      rtnBox = Blog(data.link)
      break

    case social[4]:
      rtnBox = Discord(data.link)
      break

    case social[5]:
      rtnBox = Email(data.link)
      break

    case social[6]:
      rtnBox = Facebook(data.link)
      break

    case social[7]:
      rtnBox = Github(data.link)
      break

    case social[8]:
      rtnBox = HomePage(data.link)
      break

    case social[9]:
      rtnBox = Instagram(data.link)
      break

    case social[10]:
      rtnBox = NGL(data.link)
      break

    case social[11]:
      rtnBox = Soundcloud(data.link)
      break

    case social[12]:
      rtnBox = Spotify(data.link)
      break

    case social[13]:
      rtnBox = Thread(data.link)
      break

    case social[14]:
      rtnBox = Tiktok(data.link)
      break

    case social[15]:
      rtnBox = Twitch(data.link)
      break

    case social[16]:
      rtnBox = X(data.link)
      break

    case social[17]:
      rtnBox = Youtube(data.link)
      break

    case social[18]:
      rtnBox = YoutubeMusic(data.link)

    default:
      break
  }

  return rtnBox
}

module.exports = {
  social,
  SocialRender,
}
