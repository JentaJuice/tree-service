const artistSchemas = require('../../mongo/schemas/slug')
const artistPage = require('../../../pages/backend/create/artist')

async function newArtist(app) {
  app.get('/backend/artists/create', async (req, res) => {
    if (req.session.loggedIn) {
      res.send(artistPage)
    } else {
      res.redirect('/backend/login')
    }
  })

  app.post('/api/artists/create', async (req, res) => {
    const body = req.body

    if (req.session.loggedIn) {
      if (body != undefined || body != null || body != {}) {
        const check = await artistSchemas.findOne({ slug: body.slug })

        if (check != undefined || check != null) {
          res.redirect('/backend/artists/create?status=0&message=exist+slug')
        } else {
          let data = {
            artist: body.artist,
            slug: body.slug,
            img: body.img,
          }

          let artist = new artistSchemas(data)

          try {
            await artist.save()
            res.redirect(
              '/backend/artists/create?status=1&message=artist+create'
            )
          } catch (err) {
            res.redirect('/backend/artists/create?status=0&message=' + err)
          }
        }
      } else {
        res.redirect('/backend/artists/create?status=0&message=blank+body')
      }
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = newArtist
