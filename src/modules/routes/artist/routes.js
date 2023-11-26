const ArtistTemplate = require('../../../pages/frontend/artists/templateBase')
const slugSchema = require('../../mongo/schemas/slug')
const socialSchema = require('../../mongo/schemas/social')

async function ArtistRoute(app) {
  app.get('/:artistName', async (req, res) => {
    const slug = req.params.artistName

    if (slug == undefined || slug == null) {
      res.redirect('/')
    } else {
      const check = await slugSchema.findOne({ slug: slug })

      if (check != null || check != undefined || check != '') {
        const dataList = await socialSchema.find({ artistSlug: slug })
        res.send(await ArtistTemplate(check, dataList))
      } else {
        res.send('404 | not found')
      }
    }
  })
}

module.exports = ArtistRoute
