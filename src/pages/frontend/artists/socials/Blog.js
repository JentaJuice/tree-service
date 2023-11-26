function Blog(link) {
  const comp = `<a
  class="button button-default"
  href="${link}"
  target="_blank"
  rel="noopener"
  role="button"
>
  <img class="icon" src="/images/icons/generic-blog.svg" alt="" />Read our blog
</a>
`

  return comp
}

module.exports = Blog
