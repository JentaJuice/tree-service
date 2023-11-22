const linkPage = require('../../../pages/backend/create/link')

async function newLink(app) {
  app.get('/backend/songs/links', async (req, res) => {
    if (req.session.loggedIn) {
      res.send(await linkPage())
    } else {
      res.redirect('/backend/login')
    }
  })

  app.post('/api/songs/links', (req, res) => {
    const body = req.body

    if (req.session.loggedIn) {
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = newLink
