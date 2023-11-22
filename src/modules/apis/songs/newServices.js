const serviceSchema = require('../../mongo/schemas/services')
const servicesPage = require('../../../pages/backend/create/service')

async function newService(app) {
  app.get('/backend/services/create', async (req, res) => {
    if (req.session.loggedIn) {
      res.send(servicesPage)
    } else {
      res.redirect('/backend/login')
    }
  })

  app.post('/api/services/create', async (req, res) => {
    const body = req.body

    if (req.session.loggedIn) {
      if (body != undefined || body != null || body != {}) {
        const check = serviceSchema.findOne({ service: body.service })

        if (check != undefined || check != null) {
          const data = {
            service: body.service,
            svclass: body.svclass,
            link: body.link,
          }

          const service = new serviceSchema(data)

          try {
            await service.save()
            res.redirect(
              '/backend/services/create?status=1&message=service+added'
            )
          } catch (err) {
            res.redirect('/backend/services/create?status=0&message=' + err)
          }
        } else {
          res.redirect(
            '/backend/services/create?status=0&message=this+service+is+already+exist'
          )
        }
      } else {
        res.redirect('/backend/services/create?status=0&message=blank+body')
      }
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = newService
