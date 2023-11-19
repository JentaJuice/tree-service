const UserCreationPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create new user | JentaJuice</title>

  <link rel="stylesheet" href="/statics/css/main.css">
  <link rel="stylesheet" href="/statics/css/pages/users.css">
</head>
<body>
  <div class="container">
    <form action="/api/create/user">
      <input type="text" name="username" id="username" placeholder="Username" />
      <input type="password" name="password" id="password" placeholder="Password">
      <input type="password" name="conf-password" id="conf-password" placeholder="Confirm password">

      <button type="submit" id="submitButton" disabled>
        Add user!
      </button>
    </form>
  </div>

  <script>
    const password = document.querySelector('#password')
    const confPassword = document.querySelector('#conf-password')
    const button = document.querySelector('#submitButton')
    
    let x = setInterval(() => {
      if (password.value == confPassword.value) {
        button.disabled = false
      } else {
        button.disabled = true
      }
    }, 1000)
  </script>
</body>
</html>`

module.exports = UserCreationPage
