function Email(link) {
  const comp = `<a
  class="button button-default"
  href="mailto:${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/generic-email-alt.svg" alt="" />Email Us
</a>
`

  return comp
}

module.exports = Email
