function SoundCloud(link) {
  const components = `<a
  class="button button-soundcloud"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/soundcloud.svg" alt="" />SoundCloud
</a>
`

  module.exports = components
}

module.exports = SoundCloud
