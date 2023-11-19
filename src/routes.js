const MainAPI = require('./modules/apis/main')

async function Routes(app, exp, root) {
  app.get('/', (req, res) => {
    res.send('hi :)')
  })

  await MainAPI(app)
}

module.exports = Routes
