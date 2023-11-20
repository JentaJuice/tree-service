const UserCreationPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create new user | JentaJuice</title>

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
        <form action="/api/users/create" method="post">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="conf-password"
            id="conf-password"
            placeholder="Confirm password"
          />

          <button type="submit" id="submitButton" disabled>Add user!</button>
        </form>
      </div>
    </div>

    <script>
      const params = new URLSearchParams(window.location.search);
      const statusParam = params.get("status");

      if (statusParam !== undefined) {
        if (statusParam == '1') {
          Swal.fire("Success!", "User created!", "success");
        } else {
          Swal.fire("Error!", params.get('message'), "error");
        }
      }
    </script>

    <script>
      const password = document.querySelector("#password");
      const confPassword = document.querySelector("#conf-password");
      const button = document.querySelector("#submitButton");

      let x = setInterval(() => {
        if (password.value == confPassword.value) {
          button.disabled = false;
        } else {
          button.disabled = true;
        }
      }, 1000);
    </script>
  </body>
</html>
`

module.exports = UserCreationPage
