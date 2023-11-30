const { ServiceRender } = require('../../../modules/statics/services')
const songSchema = require('../../../modules/mongo/schemas/slug')

async function SongPageTemplate(data, dataList) {
  const title = data.title
  const desp = (await songSchema.findOne({ slug: data.artist })).artist
  const profileIMG = data.image
  const footer = `&reg; ${data.year} ${data.holder}. All Right Reserved.`

  function eachList() {
    let objectListing = ''

    for (let i = 0; i < dataList.length; i++) {
      const temp = ServiceRender(dataList[i])

      if (objectListing == '') {
        objectListing = temp + '<br />'
      } else {
        objectListing += temp + '<br />'
      }
    }

    return objectListing
  }

  const slug = `<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <title>${title} | LittleLink</title>
  <meta name="description" content="${desp}">
  <meta name="author" content="${title}">

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="/css/normalize.css">
  <link rel="stylesheet" href="/css/skeleton-dark.css">
  <link rel="stylesheet" href="/css/brands.css">

  <link rel="icon" type="image/png" href="${profileIMG}">

</head>

<body>
  <div class="container">
    <div class="row">
      <div class="column" style="margin-top: 10%">

        <!-- Your Image Here -->
        <img src="${profileIMG}" class="avatar" alt="">

        <!-- Title -->
        <h1 role="heading">${title}</h1>

        <!-- Short Bio -->
        <p>${desp}</p>

        ${eachList()}

        <br>

        <p>${footer}</p>

        <p><a href="/privacy.html">Privacy Policy</a> | Build your own by forking <a href="https://littlelink.io" target="_blank" rel="noopener" role="button">LittleLink</a>.</p>

      </div>
    </div>
  </div>
</body>

</html>`

  return slug
}

module.exports = SongPageTemplate
