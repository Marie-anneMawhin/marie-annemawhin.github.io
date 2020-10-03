import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-common-types'

const items: {
  title: string
  colour: string
  link: string
  iconName: IconName
}[] = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marieanne-mawhin',
    colour: 'blue',
    iconName: 'linkedin'
  },
  {
    title: 'GitHub',
    link: 'https://github.com/Marie-anneMawhin',
    colour: 'dark-gray',
    iconName: 'github'
  }
]

const Contact: React.FC = () => {
  const contactItems = items.map(({ title, link, colour, iconName }, index) => (
    <p key={index} className="fl w-100 w-50-ns tc ph3 f4 f3-m f2-l fw2 mv3">
      <span className={colour + ' pr2'}>
        <FontAwesomeIcon icon={['fab', iconName]} />
      </span>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="link dark-blue"
      >
        {title}
      </a>
    </p>
  ))
  return (
    <Fragment>
      <SectionHeader title="Contact" />
      <div className="cf">{contactItems}</div>
    </Fragment>
  )
}

export default Contact
