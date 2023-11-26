function Github(link) {
  const component = `<a
  class="button button-github"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/github.svg" alt="" />GitHub
</a>
`

  return component
}

module.exports = Github
