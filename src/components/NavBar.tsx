import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sectionTitles = [
  'Bio',
  'Contact',
  'Skills',
  'Projects',
  'Experience',
  'Education',
  'Achievements',
  'Publications',
  'Interests',
  'Languages'
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

  const links = sectionTitles.map((title, id) => (
    <li
      key={id}
      className={`pv2 pv3-ns ${
        id !== sectionTitles.length - 1 ? 'bb ' : ''
      }b--washed-blue`}
    >
      <a
        onClick={() => scrollToId(title.toLowerCase())}
        className="f6 f5-m f4-l fw4 link dim washed-blue bg-navy"
        href="#0"
      >
        {title}
      </a>
    </li>
  ))
  return (
    <Fragment>
      <h1 className="f5 f4-ns f3-m f2-l bold fw6">Marie-anne Mawhin</h1>
      <ul className="list pl0 ml0 mw6">{links}</ul>
      <p className="f3 f1-ns mv1 mv3-ns">
        <span className="pr3">
          <FontAwesomeIcon icon={['fab', 'python']} />
        </span>
        <span>
          <FontAwesomeIcon icon={['fab', 'github']} />
        </span>
      </p>
    </Fragment>
  )
}
export default NavBar
