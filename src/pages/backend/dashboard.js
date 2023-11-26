// const { dashFilter } = require('../../modules/apis/dashboard')

async function dashboardListing(slug) {
  // const list = await dashFilter(slug)
}

const dashboardPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard | JentaJuice</title>

  <link rel="stylesheet" href="/statics/css/main.css">
  <link rel="stylesheet" href="/statics/css/pages/dash.css">
</head>
<body>
  <div class="container">
    <div class="inner-container">
      <div class="menu-container">
        <div>
          <a href="/backend/songs/links" class="button-link">
            Add new link
          </a>
          <a href="/backend/songs/title" class="button-link">
            Add new song
          </a>
        </div>
        <div>
          <a href="/backend/artists/create" class="button-link">
            Add new artist
          </a>
          <a href="/backend/artists/social" class="button-link">
            Add new artist social link
          </a>
        </div>
        <div>
          <a href="/backend/users/create" class="button-link">
            Add new user
          </a>
        </div>
      </div>
      <div class="listing-container">
        
      </div>
    </div>
  </div>
</body>
</html>`

async function DashboardModule(app) {
  app.get('/backend/dashboard', (req, res) => {
    if (req.session.loggedIn) {
      res.send(dashboardPage)
    } else {
      res.redirect('/backend/login')
    }
  })
}

module.exports = DashboardModule
