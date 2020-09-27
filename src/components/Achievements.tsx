import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'

const items = [
  'National MRT Grant 2013-2017 (3 years)',
  'GRRC research grant (6 months)'
]

const Achievements: React.FC = () => {
  const achievementItems = items.map((item, index) => (
    <p key={index} className="tc ph3 f4 f3-m f2-l fw2 black-90 mv3">
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
