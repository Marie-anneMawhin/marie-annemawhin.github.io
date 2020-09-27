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
    <p key={index} className="tc ph3 f4 f3-m f2-l fw2 black-90 mv3">
      {item}
    </p>
  ))
  return (
    <Fragment>
      <SectionHeader title="Interests" />
      {interestItems}
    </Fragment>
  )
}

export default Interests