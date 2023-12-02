const indexPage = require('../../../pages/frontend/index')

async function IndexRoute(app) {
  app.get('/', async (req, res) => {
    res.send(await indexPage())
  })
}

module.exports = IndexRoute
