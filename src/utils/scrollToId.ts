export const scrollToId = (
  id: string,
  behavior: 'smooth' | 'auto' | undefined = 'smooth'
) => {
  const selector = document.querySelector(`#${id}`)
  if (selector) {
    return selector.scrollIntoView({
      behavior
    })
  }
}
