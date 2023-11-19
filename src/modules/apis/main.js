const CreateUsers = require('./users/createUser')

async function MainAPI(app) {
  await CreateUsers(app)
}

module.exports = MainAPI
