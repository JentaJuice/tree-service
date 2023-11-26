async function SongPageTemplate(data) {
  const title = ''
  const desp = ''
  const profileIMG = ''
  let list = ''

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
        <p>Bio</p>

        ${list}

        <br>

        <p><a href="/privacy.html">Privacy Policy</a> | Build your own by forking <a href="https://littlelink.io" target="_blank" rel="noopener" role="button">LittleLink</a>.</p>

      </div>
    </div>
  </div>
</body>

</html>`

  return slug
}

module.exports = SongPageTemplate
