const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

async function Middleware(app, exp, root) {
  app.use(cors(corsOptions))

  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  app.use(
    session({
      secret: 'dethzMastery198',
      saveUninitialized: false,
    })
  )

  app.use(exp.static(root + '/statics'))
}

module.exports = Middleware
