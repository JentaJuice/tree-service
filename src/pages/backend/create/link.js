const songSchema = require('../../../modules/mongo/schemas/song')
const { services } = require('../../../modules/statics/services')

async function songEach() {
  const songList = await songSchema.find().sort({ _id: -1 }).exec()
  let list = ''
  console.log(songList)

  for (let i = 0; i < songList.length; i++) {
    let sl = songList[i]
    let template = `<option value="${sl._id}">${sl.artist} - ${sl.title}</option>`

    if (list == '') {
      list = template
    } else {
      list += template
    }
  }

  return list
}

function serviceEach() {
  let list = ''

  for (let i = 0; i < services.length; i++) {
    const template = `<option value="${services[i]}">${services[i]}</option>`

    if (list == '') {
      list = template
    } else {
      list += template
    }
  }

  return list
}

async function linkPage() {
  const page = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Link | JentaJuice</title>

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
        <form action="/api/songs/links" method="post">
          <select name="songs" id="songs" required>
            <option value="">
              -- Select Songs --
            </option>
            ${await songEach()}
          </select>
          <select name="service" id="service" required>
            <option value="">
              -- Select Services --
            </option>
            ${serviceEach()}
          </select>
          <input type="text" name="link" id="link" placeholder="Song URL" required>
          <button type="submit">
            Add!
          </button>
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

module.exports = linkPage
