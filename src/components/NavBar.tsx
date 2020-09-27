import React, { Fragment } from 'react'

const sectionsTitles = [
  'Bio',
  'Contact',
  'Skills',
  'Languages',
  'Interests',
  'Experience',
  'Projects',
  'Education',
  'Publications',
  'Achievements'
]

const NavBar: React.FC = () => {
  const scrollToId = (id: string) => {
    const selector = document.querySelector(`#${id}`)
    if (selector) {
      return selector.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  const links = sectionsTitles.map((title, id) => (
    <li key={id} className="pv3 bb b--washed-blue">
      <a
        onClick={() => scrollToId(title.toLowerCase())}
        className="f6 f5-m f4-l fw5 link dim washed-blue bg-navy"
        href="#0"
      >
        {title}
      </a>
    </li>
  ))
  return (
    <Fragment>
      <h1 className="f4 bold mw6">Marie-anne Mawhin</h1>
      <ul className="list pl0 ml0 mw6">{links}</ul>
    </Fragment>
  )
}
export default NavBar
