const songsPage = require('../../../pages/backend/create/song')
const songSchema = require('../../mongo/schemas/song')

async function newSongs(app) {
  app.get('/backend/songs/title', async (req, res) => {
    if (req.session.loggedIn) {
      res.send(await songsPage())
    } else {
      res.redirect('/backend/login')
    }
  })

  app.post('/api/songs/title', async (req, res) => {
    const body = req.body

    if (req.session.loggedIn) {
      if (body != undefined || body != null || body != {}) {
        const check = await songSchema.findOne({
          title: body.title,
          artist: body.artist,
        })

        if (check != undefined || check != null) {
          res.redirect(
            '/backend/songs/title?status=0&message=this+song+is+already+exist'
          )
        } else {
          const data = {
            title: body.title,
            artist: body.artist,
            year: Number(body.year),
            holder: body.holder,
            image: body.image,
            releasedDate: new Date(body.releasedDate).getTime(),
          }

          const song = new songSchema(data)

          try {
            await song.save()
            res.redirect('/backend/songs/title?status=1&message=song+added')
          } catch (err) {
            res.redirect('/backend/songs/title?status=0&message=' + err)
          }
        }
      } else {
        res.redirect('/backend/songs/title?status=0&message=blank+body')
      }
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = newSongs
