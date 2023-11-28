const artistSchemas = require('../../../modules/mongo/schemas/slug')

async function artistName() {
  let list = ''
  const wholeList = await artistSchemas.find().exec()

  for (let i = 0; i < wholeList.length; i++) {
    const temp = `<option value="${wholeList[i].slug}">${wholeList[i].artist}</option>`

    if (list == '') {
      list = temp
    } else {
      list += temp
    }
  }

  return list
}

async function songsPage() {
  const page = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Songs | JentaJuice</title>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/dist/sweetalert2.all.min.js"></script>
    <link
      href="https://cdn.jsdelivr.net/npm/sweetalert2@11.10.0/dist/sweetalert2.min.css"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="/statics/css/main.css" />
    <link rel="stylesheet" href="/statics/css/pages/users.css" />
  </head>
  <body>
    <div class="container">
      <div class="form-container">
        <form action="/api/songs/title" method="post">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Song title"
            required
          />
          <input
            type="text"
            name="slug"
            id="slug"
            placeholder="URL slug"
            required
          />
          <select name="artist" id="artist" required>
            <option value="" selected>-- Select Artist --</option>
            ${await artistName()}
          </select>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="Copyright Year"
            required
          />
          <input
            type="text"
            name="holder"
            id="holder"
            placeholder="Copyright Holder"
            required
          />
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            required
          />
          <input
            type="date"
            name="releasedDate"
            id="releasedDate"
            placeholder="Released Date"
            required
          />

          <button type="submit">Add!</button>
        </form>
      </div>
    </div>
    <script>
      const params = new URLSearchParams(window.location.search);
      const statusParam = params.get("status");

      if (statusParam !== undefined) {
        if (statusParam == "1") {
          Swal.fire("Success!", params.get("message"), "success");
        } else {
          Swal.fire("Error!", params.get("message"), "error");
        }
      }
    </script>
  </body>
</html>
`

  return page
}

module.exports = songsPage
