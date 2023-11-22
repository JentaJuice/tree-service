const userSchemas = require('../../mongo/schemas/user')

const UserCreationPage = require('../../../pages/backend/createUser')
const { encryptData } = require('../../encryption')

async function CreateUsers(app) {
  app.get('/backend/users/create', (req, res) => {
    if (req.session.loggedIn) {
      res.send(UserCreationPage)
    } else {
      res.redirect('/backend/login')
    }
  })

  app.post('/api/users/create', async (req, res) => {
    const body = req.body

    if (req.session.loggedIn) {
      if (body['conf-password'] == body.password) {
        console.log('password match')

        const search = await userSchemas
          .findOne({ username: body.username })
          .exec()

        if (search == null || search == undefined) {
          let data = {
            username: body.username,
            password: encryptData(body.password),
          }

          let model = new userSchemas(data)

          try {
            await model.save()
            res.redirect('/backend/users/create?status=1&message=user+created')
          } catch (err) {
            res.redirect('/backend/users/create?status=0&message=err')
          }
        } else {
          console.log('username exist')
          res.redirect('/backend/users/create?status=0&message=username+exist')
        }
      } else {
        console.log('password field is not match')
        res.redirect(
          '/backend/users/create?status=0&message=confirm+password+field+is+not+match+password+field'
        )
      }
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = CreateUsers
