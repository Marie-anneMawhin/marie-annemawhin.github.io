import React, { Fragment } from 'react'

const items = [
  {date: '2020', course: 'Data Science with python (Full track)', provider: 'DataCamp'},
  {date: '2013 - 2017', course: 'PhD in Cardiovascular Immunology', provider: '  University of Strasbourg I'},
  {date: '2010', course: 'MSc in Epidemiology', provider: 'University Paris V'},
  {date: '2009 - 2012', course: 'MSc in Physiopathology', provider: 'University of Strasbourg I'},
  {date: '2008 - 2009', course: 'BSc in Cellular Biology and Physiology, B level', provider: 'Leeds University (ERASMUS)'},
  {date: '2006 - 2008', course: 'BSc in Cellular Biology and Physiology', provider: 'University of Strasbourg I'},
]

const Education = () => {
  const educationItems = items.map(({date, course, provider}, index) => 
    <div key={index} className="tc ph4">
    <h1 className="f4 f3-m f2-l fw2 black-90 mv3">{course}</h1>
    <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
      <span>{date}</span>&nbsp;<span>{provider}</span>
    </h2>
  </div>
  )
  return <Fragment>{educationItems}</Fragment>
}

export default Education
