import React, { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeader from './SectionHeader'

const items = [
  {
    date: '2021',
    course: 'Data Science bootcamp (9 months, remote)',
    provider: 'DataScientest',
    link: 'https://datascientest.com/en'
  },
  {
    date: '2020',
    course: 'Data Science with Python (Full track)',
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
  const educationItems = items.map(
    ({ date, course, provider, link }, index) => (
      <div key={index} className="fw4 ph3 black-60 mb5-ns">
        <p className="mb1">
          <span className="f5 f4-m f3-l mid-gray">{course}</span>
          <span className="f6 f5-m f4-l fr">{date}</span>
        </p>
        <p className="f6 f5-m f4-l mt0">
          {provider}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="link dark-blue"
            >
              <span className="f7 v-mid pl2">
                <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
              </span>
            </a>
          )}
        </p>
      </div>
    )
  )
  return (
    <Fragment>
      <SectionHeader title="Education" />
      {educationItems}
    </Fragment>
  )
}

export default Education
