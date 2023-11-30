const SongPageTemplate = require('../../../pages/frontend/songs/templateBase')
const slugSchema = require('../../mongo/schemas/slug')
const songSchema = require('../../mongo/schemas/song')
const linkSchema = require('../../mongo/schemas/links')

async function SongRoute(app) {
  app.get('/:artistName/:albumSlug', async (req, res) => {
    const slug = req.params.artistName

    if (slug == undefined || slug == null) {
      res.redirect('/')
    } else {
      const check = await slugSchema.findOne({ slug: slug })

      if (check != null || check != undefined || check != '') {
        const song = await songSchema.findOne({ slug: req.params.albumSlug })
        if (song != null || song != undefined || song != check) {
          const dataList = await linkSchema.find({ songID: song._id })

          res.send(await SongPageTemplate(song, dataList))
        } else {
          res.send('404 | not found')
        }
      } else {
        res.send('404 | not found')
      }
    }
  })
}

module.exports = SongRoute
