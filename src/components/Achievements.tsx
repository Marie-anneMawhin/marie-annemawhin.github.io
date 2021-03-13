import React, { Fragment } from 'react'

import SectionHeader from './SectionHeader'

const items = [
  'National MRT Grant 2013-2017 (3 years)',
  'GRRC research grant (6 months)'
]

const Achievements: React.FC = () => {
  const achievementItems = items.map((item, index) => (
    <p key={index} className="tc ph3 f5 f4-m f3-l fw4 mid-gray mv3">
      {item}
    </p>
  ))
  return (
    <Fragment>
      <SectionHeader title="Achievements" />
      {achievementItems}
    </Fragment>
  )
}

export default Achievements
