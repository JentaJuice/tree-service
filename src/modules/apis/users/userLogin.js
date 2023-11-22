const LoginPage = require('../../../pages/backend/userLogin')
const { decryptData, encryptData } = require('../../encryption')
const userSchema = require('../../mongo/schemas/user')

async function userLogin(app) {
  app.get('/backend/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/backend/dashboard')
    } else {
      res.send(LoginPage)
    }
  })

  app.post('/api/users/login', async (req, res) => {
    const body = req.body

    if (body != undefined || body != {} || body != null) {
      const user = await userSchema.findOne({
        username: body.username,
      })

      if (user != undefined || user != null) {
        let dec = decryptData(user.password)

        if (dec == body.password) {
          req.session.loggedIn = true
          res.locals.username = body.user
          req.session.username = res.locals.username
          res.redirect('/backend/dashboard')
        } else {
          res.redirect(
            '/backend/login?status=0&message=username+or+password+is+wrong'
          )
        }
      } else {
        res.redirect(
          '/backend/login?status=0&message=username+or+password+is+wrong'
        )
      }
    } else {
      res.redirect('/backend/login?status=0&message=blank+body')
    }
  })
}

module.exports = userLogin
