function Instagram(link) {
  const components = `<a
  class="button button-instagram"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/instagram.svg" alt="" />Instagram
</a>
`

  return components
}

module.exports = Instagram
