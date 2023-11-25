function Spotify(link) {
  const component = `<a
  class="button button-spotify"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/spotify.svg" alt="" />Listen on Spotify
</a>
`

  return component
}

module.exports = Spotify
