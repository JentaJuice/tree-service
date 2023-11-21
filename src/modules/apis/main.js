const CreateUsers = require('./users/createUser')
const userLogin = require('./users/userLogin')

async function MainAPI(app) {
  await CreateUsers(app)
  await userLogin(app)

  app.get('/backend', async (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/backend/dashboard')
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = MainAPI
