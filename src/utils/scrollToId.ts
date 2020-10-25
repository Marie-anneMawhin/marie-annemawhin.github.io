export const scrollToId = (id: string) => {
  const selector = document.querySelector(`#${id}`)
  if (selector) {
    return selector.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
