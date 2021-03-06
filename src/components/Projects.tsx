import React, { Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//@ts-ignore
import { Player } from 'video-react'
import SectionHeader from './SectionHeader'

const items = [
  {
    name: 'S2DS',
    date: 'Winter 2020',
    description:
      'Europe’s largest data science training programme. Five weeks of intensive, project-based training turning exceptional analytical PhDs and MScs into Data Scientists.',
    link: 'http://www.s2ds.org/',
    image:
      'https://marie-anne-mawhin-github-portfolio.s3.eu-west-2.amazonaws.com/s2ds-project.png',
    altText: 'S2DS Presentation Excerpt',
    projectId: 's2ds'
  },
  {
    name: "DS4A Women's Summit",
    date: 'Autumn 2020',
    description:
      'Data Science for All: Women’s Summit is a novel program designed to connect more young women with data science & analytics employers. The program includes five weeks of free training and mentorship, and exclusive recruiting opportunities with top firms.',
    link: 'https://www.correlation-one.com/ds4a',
    image:
      'https://marie-anne-mawhin-github-portfolio.s3.eu-west-2.amazonaws.com/ds4a-poster.png',
    altText: 'DS4A Poster',
    projectId: 'ds4a',
    video:
      'https://marie-anne-mawhin-github-portfolio.s3.eu-west-2.amazonaws.com/ds4a.mp4'
  }
]

const Projects: React.FC = () => {
  const projectItems = items.map(
    (
      { name, date, description, link, image, altText, projectId, video },
      index
    ) => (
      <div id={projectId} key={index} className="ph3">
        <p className="f5 f4-m f3-l fw4 mid-gray mt4 mb2 tc">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link dark-blue"
          >
            <span>{name}</span>
            <span className="f7 v-mid pl2">
              <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
            </span>
          </a>
          <span> - {date}</span>
        </p>
        <p className="f6 f5-m f4-l fw4 gray mt0 lh-copy mb4">{description}</p>
        {(image || video) && (
          <div className="tc">
            {image && <img src={image} alt={altText} className="mb4" />}
            {video && (
              <Player>
                <source src={video} type="video/mp4" className="mb4" />
              </Player>
            )}
          </div>
        )}
      </div>
    )
  )
  return (
    <Fragment>
      <SectionHeader title="Projects" />
      {projectItems}
    </Fragment>
  )
}

export default Projects
