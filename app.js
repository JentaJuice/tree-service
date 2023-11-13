const exp = require('express')
require('dotenv').config()
require('./src/modules/mongo/client')

const Serve = require('./src/serve')
const Routes = require('./src/routes')
const Middleware = require('./src/middleware')

const app = exp()

Middleware(app, exp, __dirname)
Routes(app, __dirname)
Serve(app)
