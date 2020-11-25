export const scrollToId = (
  id: string,
  behavior: 'smooth' | 'auto' | undefined = 'smooth'
): void => {
  const selector = document.querySelector(`#${id}`)
  if (selector) selector.scrollIntoView({ behavior })
}
