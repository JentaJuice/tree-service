function BandCamp(link) {
  const component = `<a
  class="button button-bandcamp"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/bandcamp.svg" alt="" />Bandcamp
</a>
`

  return component
}

module.exports = BandCamp
