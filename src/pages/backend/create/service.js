const servicesPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Services | JentaJuice</title>

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
        <form action="/api/services/create" method="post">
          <input type="text" name="services" id="services" placeholder="Services Name">
          <input type="text" name="link" id="link" placeholder="Services image">
          <input type="text" name="svclass" id="svclass" placeholder="ClassName for image">

          <button type="submit">
            Added
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

module.exports = servicesPage
