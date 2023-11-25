function Twitch(link) {
  const comp = `<a
  class="button button-twitch"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/twitch.svg" alt="" />Twitch
</a>
`

  return comp
}

module.exports = Twitch
