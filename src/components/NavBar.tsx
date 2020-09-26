import React, { Fragment } from 'react'

const sectionsTitles = [
  'Contact',
  'Skills',
  'Languages',
  'Interests',
  'Experience',
  'Projects',
  'Education',
  'Achievements'
]

const NavBar: React.FC = () => {
  const links = sectionsTitles.map((title) => (
    <li className="pv3 bb b--washed-blue">
      <a className="f5 fw5 link dim washed-blue bg-navy" href="#0">
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
