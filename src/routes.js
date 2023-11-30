const MainAPI = require('./modules/apis/main')
const FrontEndRoutes = require('./modules/routes/main')

async function Routes(app, exp, root) {
  app.get('/', (req, res) => {
    res.send('hi :)')
  })

  // Mock
  app.get('/mock/login', (req, res) => {
    req.session.loggedIn = true
    console.log('logged In')
    res.send('logged In')
  })

  await MainAPI(app)
  await FrontEndRoutes(app)
}

module.exports = Routes
