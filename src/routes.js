const MainAPI = require('./modules/apis/main')
const FrontEndRoutes = require('./modules/routes/main')

async function Routes(app, exp, root) {
  await MainAPI(app)
  await FrontEndRoutes(app)
}

module.exports = Routes
