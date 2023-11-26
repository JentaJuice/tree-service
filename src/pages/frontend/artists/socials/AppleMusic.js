function AppleMusic(link) {
  const components = `<a
  class="button button-apple-music-alt"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/apple-music-alt.svg" alt="" />Listen on Apple Music
</a>
`
  return components
}

module.exports = AppleMusic
