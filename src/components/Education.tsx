import React, { Fragment } from 'react'

import SectionHeader from './SectionHeader'

const items = [
  {
    date: '2020',
    course: 'Data Science with python (Full track)',
    provider: 'DataCamp'
  },
  {
    date: '2013–2017',
    course: 'PhD in Cardiovascular Immunology',
    provider: '  University of Strasbourg I'
  },
  {
    date: '2010',
    course: 'MSc in Epidemiology',
    provider: 'University of Paris V'
  },
  {
    date: '2009-2012',
    course: 'MSc in Physiopathology',
    provider: 'University of Strasbourg I'
  },
  {
    date: '2008–2009',
    course: 'BSc in Cellular Biology and Physiology, B level',
    provider: 'Leeds University (ERASMUS)'
  },
  {
    date: '2006–2008',
    course: 'BSc in Cellular Biology and Physiology',
    provider: 'University of Strasbourg I'
  }
]

const Education: React.FC = () => {
  const educationItems = items.map(({ date, course, provider }, index) => (
    <div key={index} className="tc ph3 fw4">
      <p className="f5 f4-m f3-l mid-gray mt4 mb1">{course}</p>
      <p className="f6 f5-m f4-l gray mt0 lh-copy">
        <span>{date}</span> - <span>{provider}</span>
      </p>
    </div>
  ))
  return (
    <Fragment>
      <SectionHeader title="Education" />
      {educationItems}
    </Fragment>
  )
}

export default Education
