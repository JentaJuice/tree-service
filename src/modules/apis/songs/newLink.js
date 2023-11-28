const linkPage = require('../../../pages/backend/create/link')
const linkSchema = require('../../mongo/schemas/links')

async function newLink(app) {
  app.get('/backend/songs/links', async (req, res) => {
    if (req.session.loggedIn) {
      res.send(await linkPage())
    } else {
      res.redirect('/backend/login')
    }
  })

  app.post('/api/songs/links', async (req, res) => {
    const body = req.body

    if (req.session.loggedIn) {
      if (body != null || body != undefined || body != {}) {
        const check = await linkSchema.findOne({
          songID: body.songs,
          service: body.service,
        })

        if (check == undefined || check == null) {
          let data = {
            songID: body.songs,
            service: body.service,
            link: body.link,
          }

          try {
            await new linkSchema(data).save()
            res.redirect('/backend/songs/links?status=1&message=link+added')
          } catch (err) {
            res.redirect('/backend/songs/links?status=0&message=' + err)
          }
        } else {
          res.redirect('/backend/songs/links?status=0&message=service+exist')
        }
      } else {
        res.redirect('/backend/songs/links?status=0&message=blank+body')
      }
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = newLink
