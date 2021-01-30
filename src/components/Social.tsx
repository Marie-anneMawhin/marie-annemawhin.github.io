import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
import React, { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeader from './SectionHeader'

const items: {
  title: string
  link: string
  colour: string
  iconType: IconPrefix
  iconName: IconName
}[] = [
  {
    title: 'Blog',
    link: 'https://marie-annemawhin.github.io/blog/',
    colour: 'light-green',
    iconType: 'fas',
    iconName: 'edit'
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marieanne-mawhin',
    colour: 'blue',
    iconType: 'fab',
    iconName: 'linkedin'
  },
  {
    title: 'GitHub',
    link: 'https://github.com/Marie-anneMawhin',
    colour: 'dark-gray',
    iconType: 'fab',
    iconName: 'github'
  }
]

const Social: React.FC = () => {
  const socialItems = items.map(
    ({ title, link, colour, iconType, iconName }, index) => (
      <p key={index} className="fl w-100 w-33-ns tc ph3 f4 f3-m f2-l fw2 mv3">
        <span className={colour + ' pr2'}>
          <FontAwesomeIcon icon={[iconType, iconName]} />
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
    )
  )
  return (
    <Fragment>
      <SectionHeader title="Social" />
      <div className="cf">{socialItems}</div>
    </Fragment>
  )
}

export default Social
