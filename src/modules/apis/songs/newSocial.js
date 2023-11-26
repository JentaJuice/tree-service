const socialPage = require('../../../pages/backend/create/socialLink')
const socialSchema = require('../../mongo/schemas/social')

async function newSocial(app) {
  app.get('/backend/artists/social', async (req, res) => {
    if (req.session.loggedIn) {
      res.send(await socialPage())
    } else {
      res.redirect('/backend/login')
    }
  })

  app.post('/api/artists/social', async (req, res) => {
    const body = req.body

    if (req.session.loggedIn) {
      if (body != undefined || body != null || body != {}) {
        const check = await socialSchema.findOne({
          artistSlug: body.artist,
          service: body.service,
        })

        if (check != undefined || check != null) {
          res.redirect('/backend/artists/social?status=0&message=exist+slug')
        } else {
          let data = {
            artistSlug: body.artist,
            service: body.service,
            link: body.link,
          }

          let artist = new socialSchema(data)

          try {
            await artist.save()
            res.redirect(
              '/backend/artists/social?status=1&message=artist+social'
            )
          } catch (err) {
            res.redirect('/backend/artists/social?status=0&message=' + err)
          }
        }
      } else {
        res.redirect('/backend/artists/social?status=0&message=blank+body')
      }
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = newSocial
