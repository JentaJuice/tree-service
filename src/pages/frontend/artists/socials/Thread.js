function Thread(link) {
  const component = `<a
  class="button button-threads"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/threads.svg" alt="" />Threads
</a>
`

  return component
}

module.exports = Thread
