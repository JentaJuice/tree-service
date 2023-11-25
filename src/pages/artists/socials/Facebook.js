function Facebook(link) {
  const component = `<a
  class="button button-faceb"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/facebook.svg" alt="" />Find us on Facebook
</a>
`

  return component
}

module.exports = Facebook
