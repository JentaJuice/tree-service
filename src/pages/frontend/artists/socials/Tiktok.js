function TikTok(link) {
  const comp = `<a
  class="button button-tiktok"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/tiktok.svg" alt="" />TikTok
</a>
`

  return comp
}

module.exports = TikTok
