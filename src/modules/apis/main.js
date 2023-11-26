const DashboardModule = require('../../pages/backend/dashboard')
const newArtist = require('./songs/newArtist')
const newLink = require('./songs/newLink')
const newSongs = require('./songs/newSongs')
const newSocial = require('./songs/newSocial')
const CreateUsers = require('./users/createUser')
const userLogin = require('./users/userLogin')

async function MainAPI(app) {
  await CreateUsers(app)
  await userLogin(app)

  await DashboardModule(app)

  await newArtist(app)
  await newSocial(app)

  await newSongs(app)
  await newLink(app)

  app.get('/backend', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/backend/dashboard')
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = MainAPI
