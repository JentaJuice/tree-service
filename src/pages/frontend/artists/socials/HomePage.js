function Homepage(link) {
  const comp = `<a
  class="button button-default"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/generic-homepage.svg" alt="" />Visit Homepage
</a>
`

  return comp
}

module.exports = Homepage
