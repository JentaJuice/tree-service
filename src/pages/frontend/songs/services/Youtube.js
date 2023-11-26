function Youtube(link) {
  const comp = `<a
  class="button button-yt"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/youtube.svg" alt="" />YouTube
</a>
`

  return comp
}

module.exports = Youtube
