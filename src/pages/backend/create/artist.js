const artistPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Artists | JentaJuice</title>

    <link rel="stylesheet" href="/statics/css/main.css">
    <link rel="stylesheet" href="/statics/css/pages/users.css">
  </head>
  <body>
    <div class="container">
      <div class="form-container">
        <form action="/api/artists/create">
          <input type="text" id="artist" name="artist" placeholder="Artist Name" required>
          <input type="text" id="slug" name="slug" placeholder="Slug on URL" required>

          <button type="submit">
            Create!
          </button>
        </form>
      </div>
    </div>
  </body>
</html>
`

module.exports = artistPage
