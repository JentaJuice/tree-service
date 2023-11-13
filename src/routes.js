async function Routes(app, exp, root) {
  app.get('/', (req, res) => {
    res.send('hi :)')
  })
}

module.exports = Routes
