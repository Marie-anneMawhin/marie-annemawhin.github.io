import React, { Fragment } from 'react'

import SectionHeader from './SectionHeader'

const items = [
  'National MRT Grant 2013-2017 (3 years)',
  'GRRC research grant (6 months)'
]

const Achievements: React.FC = () => {
  const achievementItems = items.map((item, index) => (
    <p
      key={index}
      className="fl w-100 w-50-ns fw4 ph3 f5 f4-m f3-l fw4 mid-gray"
    >
      {item}
    </p>
  ))
  return (
    <Fragment>
      <SectionHeader title="Achievements" />
      <div className="mv3 flex flex-wrap">{achievementItems}</div>
    </Fragment>
  )
}

export default Achievements
