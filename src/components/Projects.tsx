import React, { Fragment } from 'react'
import SectionHeader from './SectionHeader'

const items = [
  {
    name: "DS4A Women's Summit",
    date: 'Autumn 2020',
    description:
      'Data Science for All: Women’s Summit is a novel program designed to connect more young women with data science & analytics employers. The program includes five weeks of free training and mentorship, and exclusive recruiting opportunities with top firms.',
    link: 'https://www.correlation-one.com/ds4a'
  },
  {
    name: 'S2DS',
    date: 'Winter 2020',
    description:
      'Europe’s largest data science training programme. Five weeks of intensive, project-based training turning exceptional analytical PhDs and MScs into Data Scientists.',
    link: 'http://www.s2ds.org/'
  }
]

const Projects: React.FC = () => {
  const projectItems = items.map(({ name, date, description, link }, index) => (
    <div key={index} className="tc ph3">
      <p className="f4 f3-m f2-l fw2 black-90 mv3">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link dark-blue"
        >
          {name}
        </a>
        <span> - {date}</span>
      </p>
      <p className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">{description}</p>
    </div>
  ))
  return (
    <Fragment>
      <SectionHeader title="Projects" />
      {projectItems}
    </Fragment>
  )
}

export default Projects
