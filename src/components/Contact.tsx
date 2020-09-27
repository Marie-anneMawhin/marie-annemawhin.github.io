import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'

const items = [
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/marieanne-mawhin' },
  { title: 'GitHub', link: 'https://github.com/Marie-anneMawhin' }
]

const Contact: React.FC = () => {
  const contactItems = items.map(({ title, link }, index) => (
    <p key={index} className="tc ph3 f4 f3-m f2-l fw2 mv3">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="black-90"
      >
        {title}
      </a>
    </p>
  ))
  return (
    <Fragment>
      <SectionHeader title="Contact" />
      {contactItems}
    </Fragment>
  )
}

export default Contact
