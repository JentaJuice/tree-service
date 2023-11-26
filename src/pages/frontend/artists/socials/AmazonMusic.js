function AmazonMusic(link) {
  const component = `<a
  class="button button-amazon-music"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/amazon-music.svg" alt="" />Listen on Amazon Music
</a>
`

  return component
}

module.exports = AmazonMusic
