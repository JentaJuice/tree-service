function Discord(link) {
  const component = `<a
  class="button button-discord"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/discord.svg" alt="" />Discord
</a>
`

  return component
}

module.exports = Discord
