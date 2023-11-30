const ArtistRoute = require('./artist/routes')
const SongRoute = require('./songs/routes')

async function FrontEndRoutes(app) {
  await ArtistRoute(app)
  await SongRoute(app)
}

module.exports = FrontEndRoutes
