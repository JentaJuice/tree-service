const UserCreationPage = require('../../../pages/backend/createUser')

async function CreateUsers(app) {
  app.get('/backend/users/create', (req, res) => {
    res.send(UserCreationPage)
  })

  app.post('/api/users/create', (req, res) => {
    const body = req.body
  })
}

module.exports = CreateUsers
