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
    <div key={index}>
      <p><span>{date} </span><span>{course}</span></p>
      <p>{provider}</p>
    </div>
  )
return <Fragment>{educationItems}</Fragment>
}

export default Education
