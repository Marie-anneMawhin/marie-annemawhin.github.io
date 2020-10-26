import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'

const items = [
  'travel',
  'cycling',
  'hiking',
  'boxing',
  'yoga',
  'fitness',
  'music',
  'cinema',
  'drawing',
  'cooking for others'
]

const Interests: React.FC = () => {
  const interestItems = items.map((item, index) => (
    <p
      key={index}
      className="tc ph3 f5 f4-m f3-l fw2 black-90 mv3 fl w-50 w-33-m w-25-l"
    >
      {item}
    </p>
  ))
  return (
    <Fragment>
      <SectionHeader title="Interests" />
      <div className="cf">{interestItems}</div>
    </Fragment>
  )
}

export default Interests
