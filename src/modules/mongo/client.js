const mongoose = require('mongoose')
const color = require('bash-color')
const DateLine = require('../date')

const URI = `mongodb://${process.env.MONGOOSE_USR}:${process.env.MONGOOSE_PWD}@${process.env.MONGOOSE_IP}/${process.env.MONGOOSE_DB}?tls=false&authSource=${process.env.MONGOOSE_authSource}`

mongoose.connect(URI)

const db = mongoose.connection

db.on('error', (error) => {
  console.log(error)
})

db.once('connected', () => {
  console.log(color.green('Database Connected') + ' --> ' + DateLine)
  console.log('')
})
